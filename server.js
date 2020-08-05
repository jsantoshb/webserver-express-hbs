const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static( __dirname + '/public' ))
app.use(express.static( __dirname + '/views/partials' ))


//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
// helpers

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Javier'
    })
});

app.get('/about', function (req, res) {
    res.render('about')
});
 
app.listen(port, ()=> console.log(`Servidor en puerto ${port}`));  