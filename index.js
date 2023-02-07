//Requerimientos.
require('dotenv').config({path:'./values.env'});
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');
const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const dictionaryQuery = require('./server/dictionary_query');
const db_config = require('./server/mysql');
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const uuid = require('node-uuid');

//Variables globales.
const envVars = require('./server/environment-variables');

//Express.
const app = express();

//CookieParser.
app.use(cookieParser());

//reCAPTCHA.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Controller, cargar el diccionario indistintamente de la ruta.
const connection = mysql.createConnection(db_config);
var dictionary;
var users;
handleDisconnect();

//Mantiene viva la conexión con la DB.
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

//Login
app.use(session({
    secret: uuid.v1(),
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Heroku stuff.
app.use(express.static(__dirname));
app.use(expressLayouts);

//Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
});

//Sets del express-ejs-layouts.
app.set('layout', './layouts/normal');
app.set('view engine', 'ejs');

//Nodemailer.
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: envVars.nodemailerEmail,
        pass: envVars.nodemailerPassword
    },
    tls: {
        rejectUnauthorized: false
    }
});

//Rutas/routing.
app.get('/', (req, res) => {
    res.render('home', {
        title: `Gërteg tjl Balanlàedenug - Inicio`,
        retrievedResults: dictionary
    });
});
app.get('/diccionario/:search', (req, res) => {
    res.render('diccionario', {
        title: `Gërteg tjl Balanlàedenug - Diccionario`,
        retrievedResults: dictionary
    });
});
app.get('/listado/:search', (req, res) => {
    res.render('listado', {
        title: `Gërteg tjl Balanlàedenug - Listado`,
        retrievedResults: dictionary
    });
});
app.get('/portal-login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/portal-principal');
    } else {
        res.render('portal-login', {
            title: `Gërteg tjl Balanlàedenug - Iniciar sesion en Portal Ciudadano`,
            retrievedResults: dictionary
        });
    }
});
app.get('/portal-principal', function (req, res) {
    //Si el usuario está loggeado.
    if (req.session.loggedin) {
        res.render('portal-principal', {
            title: `Gërteg tjl Balanlàedenug - Portal Ciudadano`,
            retrievedResults: dictionary,
            retrievedUsers: users
        });
    } else {
        //Sin sesión iniciada.
        res.redirect('/portal-login?session=false');
    }
    res.end();
});
app.get('/verificar/:token', (req, res) => {
    const { token } = req.params;

    //Verificación del JWT token.
    jwt.verify(token, envVars.jwtKey, function (err, decoded) {
        if (err) {
            console.log(err);
            res.redirect('/portal-login?verify=false');
        } else {
            //Actualiza la info del usuario en la DB.
            connection.query('UPDATE heroku_bf7cb810553a372.users SET verified_email = 1 WHERE email = ?', [decoded.email], function (error, results, fields) {
                if (error) {
                    res.redirect('/portal-login?database=error');
                } else {
                    res.redirect('/portal-login?verify=true');
                }
            });
        }
    });
});
app.get('/restablecimiento/:token', (req, res) => {
    res.render('portal-restablecimiento', {
        title: `Gërteg tjl Balanlàedenug - Portal Ciudadano`,
        retrievedResults: dictionary
    });
});
app.post('/restablecer/:token', (req, res) => {
    const { token } = req.params;

    //Verificación del JWT token.
    jwt.verify(token, envVars.jwtKey, function (err, decoded) {
        if (err) {
            console.log(err);
            res.redirect('/portal-login?verify=false');
        } else {
            let newPassword = req.body.password;
            const salt = bcrypt.genSaltSync(10);
            let hashedNewPassword = bcrypt.hashSync(newPassword, salt);

            //Actualiza la info del usuario en la DB.
            connection.query('UPDATE heroku_bf7cb810553a372.users SET password = ? WHERE email = ?', [hashedNewPassword, decoded.email], function (error, results, fields) {
                if (error) {
                    res.redirect('/portal-login?database=error');
                } else {
                    res.redirect('/portal-login?recovery=true');
                }
            });
        }
    });
});
app.get('/:name', (req, res) => {
    let capitalizedName = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
    res.render(req.params.name, {
        title: `Gërteg tjl Balanlàedenug - ${capitalizedName}`,
        retrievedResults: dictionary
    });
});

//Posts
app.post('/autenticar', function (req, res) {
    //Captura los campos de ingreso.
    let email = req.body.email;
    let password = req.body.password;

    //Comprueba que los campos no estén vacíos.
    if (email && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM heroku_bf7cb810553a372.users WHERE email = ?', [email], function (error, results, fields) {
            //Si hay un problema con la consulta, devuelve el error.
            if (error) throw error;
            //Si la cuenta existe y las contraseñas coinciden:
            if (results.length > 0) {
                if (results[0].verified_email === 0) {
                    res.redirect('/portal-login?verified=false');
                } else {
                    if (bcrypt.compareSync(password, results[0].password)) {
                        //Autentica al usuario
                        req.session.loggedin = true;
                        req.session.email = email;
                        //Redirige a la página principal del portal.
                        res.cookie("PortalCiudadano", {
                            id: results[0].id,
                            email: req.session.email,
                            fullName: results[0].full_name,
                            gender: results[0].gender,
                            country: results[0].country,
                            birthdate: results[0].birthdate,
                            verifiedEmail: results[0].verified_email,
                            approvedCitizenship: results[0].approved_citizenship,
                            rank: results[0].rank,
                            walletAddress: results[0].wallet_address,
                            profileImage: results[0].profile_image,
                            twitterUser: results[0].twitter_user,
                            discordUser: results[0].discord_user
                        })
                            .redirect('/portal-principal');
                    } else {
                        res.redirect('/portal-login?password=false');
                    }
                }
            } else {
                res.redirect('/portal-login?email=null');
            }
            res.end();
        });
    }
});

app.post('/registrar', function (req, res) {
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.redirect('/portal-registro?captcha=null');
    }

    // Put your secret key here.
    var secretKey = envVars.recaptchaSecret;
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.redirect('/portal-registro?captcha=false');
        }

        //Superando todo, registra el usuario.
        let email = req.body.email;
        let password = req.body.password;
        let fullname = req.body.fullname;
        let gender = req.body.gender;
        let country = req.body.country;
        let birthdate = req.body.birthdate;

        //Hashea la contraseña.
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        var sql = `INSERT INTO heroku_bf7cb810553a372.users 
        (email, password, full_name, gender, country, birthdate, verified_email, approved_citizenship, rank, wallet_address, profile_image, twitter_user)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        connection.query(sql, [email, hashedPassword, fullname, gender, country, birthdate, 0, 0, "tourist", "", "", ""], function (err, results) {
            if (err) {
                console.log(err);
                return res.redirect('/portal-registro?database=error');
            } else {
                //Si sale todo bien, envía el email de verificación.
                sendEmail([ email, envVars.officialEmail ], fullname, "register");

                return res.redirect('/portal-login?register=success');
            }
        });
    });
});

app.post('/recuperar', function (req, res) {
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.redirect('/portal-login?captcha=null');
    }

    // Put your secret key here.
    var secretKey = envVars.recaptchaSecret;
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.redirect('/portal-login?captcha=false');
        }

        let email = req.body.email;
        let option = req.body.recovery_option

        //Superando todo, inicia la recuperación.
        connection.query('SELECT * FROM heroku_bf7cb810553a372.users WHERE email = ?', [email], function (err, results) {
            if (err) {
                console.log(err);
                return res.redirect('/portal-login?database=error');

            } else if (results.length > 0) {
                //Si sale todo bien, envía el email de verificación.
                if (option === "new_link") {
                    sendEmail(email, results[0].full_name, "register");
                    return res.redirect('/portal-login?newlink=success');
                } else if (option === "forgot_password") {
                    sendEmail(email, results[0].full_name, "password");
                    return res.redirect('/portal-login?recovery=success');
                }

            } else if (results.length === 0) {
                //Si no está registrado ese email, lo avisa.
                return res.redirect('/portal-login?email=null');
            }
        });
    });
});

app.post('/cerrar-sesion', function (req, res) {
    req.session.destroy();
    return res.redirect('/portal-login');
});

app.post('/actualizar-perfil', function (req, res) {
    let email = req.session.email;
    let fullname = req.body.name;
    let gender = req.body.gender;
    let profilePicture = req.body.profilePicture;
    let twitter = req.body.twitter;
    let discord = req.body.discord;

    let editQuery = `
        UPDATE heroku_bf7cb810553a372.users 
        SET 
            full_name = ?,
            gender = ?,
            profile_image = ?,
            twitter_user = ?,
            discord_user = ?
        WHERE
            email = ?;
    `;

    connection.query(editQuery, [fullname, gender, profilePicture, twitter, discord, email], function (error, results, fields) {
        if (error) throw error;
    });

    connection.query('SELECT * FROM heroku_bf7cb810553a372.users WHERE email = ?;', [email], function (error, results, fields) {
        if (error) throw error;

        return res.cookie("PortalCiudadano", {
            id: results[0].id,
            email: req.session.email,
            fullName: results[0].full_name,
            gender: results[0].gender,
            country: results[0].country,
            birthdate: results[0].birthdate,
            verifiedEmail: results[0].verified_email,
            approvedCitizenship: results[0].approved_citizenship,
            rank: results[0].rank,
            walletAddress: results[0].wallet_address,
            profileImage: results[0].profile_image,
            twitterUser: results[0].twitter_user,
            discordUser: results[0].discord_user
        }).redirect('/portal-principal?profile=updated&tab=1');
    });
});

app.post('/vincular-monedero', function (req, res) {
    let email = req.session.email;
    let walletAddress = req.body.walletAddress;

    let editQuery = `
        UPDATE heroku_bf7cb810553a372.users 
        SET 
            wallet_address = ?
        WHERE
            email = ?;
    `;

    connection.query(editQuery, [walletAddress, email], function (error, results, fields) {
        if (error) throw error;
    });

    connection.query('SELECT * FROM heroku_bf7cb810553a372.users WHERE email = ?;', [email], function (error, results, fields) {
        if (error) throw error;

        return res.cookie("PortalCiudadano", {
            id: results[0].id,
            email: req.session.email,
            fullName: results[0].full_name,
            gender: results[0].gender,
            country: results[0].country,
            birthdate: results[0].birthdate,
            verifiedEmail: results[0].verified_email,
            approvedCitizenship: results[0].approved_citizenship,
            rank: results[0].rank,
            walletAddress: results[0].wallet_address,
            profileImage: results[0].profile_image,
            twitterUser: results[0].twitter_user,
            discordUser: results[0].discord_user
        }).redirect('/portal-principal?wallet=success&tab=3');
    });
});

//Agregado de process.env.PORT para Heroku.
app.listen(envVars.port, () => {
    console.log(`Now listening on port ${envVars.port}`);
});

//Funciones
function sendEmail(email, fullname, option) {
    const token = jwt.sign(
        { 'email': email }, envVars.jwtKey, { expiresIn: '15m' }
    );
    let emailText;
    let emailSubject;

    switch (option) {
        case "register":
            emailSubject = "Verifique su cuenta en Portal Ciudadano";
            emailText = `¡Hola, ${fullname}!\n\nRecientemente se registró en el Portal Ciudadano del Gran Ducado de Libraterra. Para poder utilizar su cuenta de manera plena y completar su proceso de solicitud de ciudadanía digital libraterrense, debe verificar su correo electrónico.\n\nPara hacerlo efectivo, por favor ingrese al siguiente enlace (el cual vence en 15 minutos desde este momento):\n\nhttp://balanlaedenug.net.ar/verificar/${token}\n\nGracias.`;
            break;
        case "password":
            emailSubject = "Restablecimiento de contraseña en Portal Ciudadano";
            emailText = `¡Hola, ${fullname}!\n\nRecientemente solicitó restablecer su contraseña en el Portal Ciudadano del Gran Ducado de Libraterra.\n\nPara hacerlo efectivo, por favor ingrese al siguiente enlace (el cual vence en 15 minutos desde este momento):\n\nhttp://balanlaedenug.net.ar/restablecimiento/${token}\n\nGracias.`;
            break;
        case "officialEmail-register":
            emailSubject = "Nuevo registro en Portal Ciudadano";
            emailText = `${fullname} se registró en la plataforma.`;
            break;
        default:
            emailText = `¡Hola, ${fullname}!\n\nRecientemente se registró en el Portal Ciudadano del Gran Ducado de Libraterra. Para poder utilizar su cuenta de manera plena y completar su proceso de solicitud de ciudadanía digital libraterrense, debe verificar su correo electrónico.\n\nPara hacerlo efectivo, por favor ingrese al siguiente enlace (el cual vence en 15 minutos desde este momento):\n\nhttp://balanlaedenug.net.ar/verificar/${token}\n\nGracias.`;
            break;
    }

    const mailSettings = {
        from: envVars.nodemailerEmail,
        to: email,
        subject: emailSubject,
        text: emailText
    };

    transporter.sendMail(mailSettings, function (error, info) {
        if (error) throw Error(error);
        console.log('Correo enviado exitosamente.');
        console.log(info);
    });
}

//Intenta obtener el diccionario si ya fue cargado en la sesión, sino llama a la DB.
function handleDisconnect() {
    connection.connect(function(err) {
        if (err) {
            console.log('Error when connecting to DB:', err);
            setTimeout(handleDisconnect, 2000);
        } else {
            connection.query(dictionaryQuery, function (error, result) {
                if (error) {
                    return console.log("Error while loading dictionary: " + error.message);
                } else {
                    return dictionary = JSON.stringify(result);
                }
            });

            connection.query("SELECT * FROM heroku_bf7cb810553a372.users;", function (error, result) {
                if (error) {
                    return console.log("Error while loading dictionary: " + error.message);
                } else {
                    return users = JSON.stringify(result);
                }
            });
        }
    });

    connection.on('error', function(err) {
        console.log(err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}