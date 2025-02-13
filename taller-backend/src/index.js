const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware para leer JSON en las peticiones
app.use(express.json());
app.use(cors());

// Archivo donde se guardarán los vehículos (como base de datos temporal)
const DATA_FILE = __dirname + "/data/vehiculos.json";

// Cargar datos de vehículos
const leerVehiculos = () => {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
  }
  return [];
};

// Guardar vehículos en el archivo
const guardarVehiculos = (vehiculos) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(vehiculos, null, 2));
};

// Ruta GET - Obtener todos los vehículos
app.get("/api/vehiculos", (req, res) => {
  const vehiculos = leerVehiculos();
  res.json(vehiculos);
});

// Ruta POST - Agregar un nuevo vehículo
app.post("/api/vehiculos", (req, res) => {
  const { placa, marca, modelo, año, descripcion } = req.body;
  
  if (!placa || !marca || !modelo || !año || !descripcion) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const vehiculos = leerVehiculos();
  const nuevoVehiculo = { placa, marca, modelo, año, descripcion };

  vehiculos.push(nuevoVehiculo);
  guardarVehiculos(vehiculos);

  res.status(201).json({ mensaje: "Vehículo agregado correctamente", vehiculo: nuevoVehiculo });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
