const TABLA = 'vehiculos';

function vehiculosRegistrados() {
    return db.vehiculosRegistrados(TABLA);
}

module.exports = {
    vehiculosRegistrados,
}