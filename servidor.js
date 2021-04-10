/* Declaración de variables y constantes para establecer un servidor local con Express */

const express = require("express");
const app = express();
var path = require('path');
var PORT = 8080;
var opciones = {
    root: path.join(__dirname)
};

/*Funciones  para llamar archivos html css y js*/
function fJs (req, res) {
    var archivo = '/static/scripts.js';
    res.sendFile(archivo, opciones, function(err) { 
        if (err) { 
            next(err); 
        } else { 
            console.log('Enviado:', archivo); 
        } 
    });
};

function fCss (req, res) {
    var archivo = '/static/style.css';
    res.sendFile(archivo, opciones, function(err) { 
        if (err) { 
           
        } else { 
            console.log('Enviado:', archivo); 
        } 
    });
};

function inicio(req, res) {
    var archivo = 'index.html';
    res.sendFile(archivo, opciones, function(err) { 
        if (err) { 
            next(err); 
        } else { 
            console.log('Enviado:', archivo); 
        } 
    });
};

/*Ejecución del servidor y peticiones de archivo */

app.use(express.static('static'));
app.get('/', inicio);
app.get('/static/style.css', fCss);
app.get('/static/scripts.js', fJs);
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server on port " + PORT);
});
