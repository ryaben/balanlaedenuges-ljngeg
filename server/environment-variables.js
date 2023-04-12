const envVars = {
    nodemailerEmail: process.env.NODEMAILER_EMAIL,
    nodemailerPassword: process.env.NODEMAILER_PASSWORD,
    jwtKey: process.env.JWT_KEY,
    recaptchaSecret: process.env.RECAPTCHA_SECRET,
    port: process.env.PORT,
    databaseUser: process.env.CLEARDB_DATABASE_USER,
    databasePassword: process.env.CLEARDB_DATABASE_PASSWORD,
    officialEmail: process.env.OFFICIAL_EMAIL,
    telegramToken: process.env.TELEGRAM_TOKEN
}

module.exports = envVars;