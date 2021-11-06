const express = require('express');
var controller = require('./server/controller');
const app = express();
const port = 5000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
    controller.loadDictionary();
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});