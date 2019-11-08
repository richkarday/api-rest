require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// Parse formato a application/json
app.use(bodyParser.json());

// Archivo agrupador de rutas
app.use(require('./routes/index'));

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/cafeteria', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
    (err, resp) => {
    if(err) throw err;
    
    console.log('Base de datos online');
});

// Puerto de escucha de la aplicación
app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto ', process.env.PORT);
});