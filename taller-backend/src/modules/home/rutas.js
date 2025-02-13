const express = require('express');

const respuesta = require('../red/respuestas');
const controlador = require('../vehiculos/controlador');

const router = express.Router();

router.get('/', function (req, res) {
        const vehiculosRegistrados = controlador.vehiculosRegistrados();
        respuesta.success(req, res, vehiculosRegistrados, 200)
});

module.exports = router;