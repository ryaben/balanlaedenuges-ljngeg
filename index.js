//Declaraciones
const express = require('express');
const controller = require('./server/controller');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 5000;

app.use(express.static(__dirname));
app.use(expressLayouts);

//Sets del express-ejs-layouts
app.set('layout', './layouts/normal');
app.set('view engine', 'ejs');

//Rutas
app.get('/diccionario/:search', controller.loadFilteredDictionary);
app.get('/listado/:search', controller.loadFilteredDictionary);
app.get('/estadisticas', controller.loadFullDictionary);
app.get('/:name', (req, res) => {
    let capitalizedName = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
    res.render(req.params.name, {
        title: `Balanlàedenuges ljngeg - ${capitalizedName}`,
        retrievedResults: ""
    });
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});