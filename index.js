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
app.get('/diccionario', (req, res) => {
    res.render('dictionary', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/listado-palabras', (req, res) => {
    res.render('listing', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/sustantivos', (req, res) => {
    res.render('nouns', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/verbos', (req, res) => {
    res.render('verbs', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/adjetivos', (req, res) => {
    res.render('adjectives', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/adverbios', (req, res) => {
    res.render('adverbs', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/pronombres', (req, res) => {
    res.render('articles', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/adposiciones', (req, res) => {
    res.render('adpositions', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/composiciones', (req, res) => {
    res.render('compounds', { title: 'Balanlàedenuges ljngeg'})
});
app.get('/sintaxis', (req, res) => {
    res.render('syntaxis', { title: 'Balanlàedenuges ljngeg'})
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});