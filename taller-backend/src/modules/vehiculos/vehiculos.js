const express = require('express');
const router = express.Router();
const db = require('../../Db/mysql');  // Importa los datos quemados

// Obtener todos los vehículos (de los datos quemados)
router.get('/', async (req, res) => {
    try {
        const vehiculos = await db.vehiculosRegistrados();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: "Error obteniendo vehículos" });
    }
});

// Agregar un nuevo vehículo (solo en memoria)
router.post('/', async (req, res) => {
    try {
        const nuevoVehiculo = await db.agregarVehiculo(req.body);
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ error: "Error agregando vehículo" });
    }
});

module.exports = router;
