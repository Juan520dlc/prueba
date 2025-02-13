const express = require('express');
const cors = require('cors');
const config = require('./config');

const home = require('./modules/home/rutas')
const vehiculo = require('./modules/vehiculos/vehiculos')

const app = express();

app.use(cors());

// Configuración
app.set('port', config.app.port)

// Rutas
app.use('/api/home', home);
app.use('/api/vehiculos', vehiculo);

module.exports = app;