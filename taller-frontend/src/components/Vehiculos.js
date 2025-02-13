import { useEffect, useState } from "react";

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    placa: "",
    marca: "",
    modelo: "",
    año: "",
    descripcion: "",
  });

  const fetchVehiculos = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/vehiculos");
      const data = await response.json();
      setVehiculos(data);
    } catch (error) {
      console.error("Error al obtener los vehículos:", error);
    }
  };

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const handleChange = (e) => {
    setNuevoVehiculo({ ...nuevoVehiculo, [e.target.name]: e.target.value });
  };

  const agregarVehiculo = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4000/api/vehiculos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoVehiculo),
      });
  
      if (!response.ok) {
        throw new Error("Error al agregar el vehículo");
      }
  
      const data = await response.json();
      alert(data.mensaje); // Muestra un mensaje de éxito
  
      fetchVehiculos(); // Recarga la lista de vehículos
      setNuevoVehiculo({ placa: "", marca: "", modelo: "", año: "", descripcion: "" });
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    document.title = "Vehículos Registrados";
  }, []);
  

  return (
      <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <nav className="sticky top-0 z-50 bg-[#1D1616] p-4 shadow-md w-full">
        <ul className="flex justify-center items-center space-x-4">
          <li className="rounded-lg px-4 py-3 text-white transition-transform duration-200 ease-in hover:bg-[#8E1616] hover:translate-y-1">
            <a href="#">Vehiculos</a>
          </li>
          <li className="rounded-lg px-4 py-3 text-white transition-transform duration-200 ease-in hover:bg-[#8E1616] hover:translate-y-1">
            <a href="proyectos.html">Reparaciones</a>
          </li>
          <li className="rounded-lg px-4 py-3 text-white transition-transform duration-200 ease-in hover:bg-[#8E1616] hover:translate-y-1">
            <a href="contacto.html">Administración</a>
          </li>
        </ul>
      </nav>

      {/* Contenedor principal */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-6">Vehículos Registrados</h1>

        {/* Botón para mostrar formulario */}
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="bg-[#8E1616] text-white px-4 py-2 rounded-md mb-4 hover:bg-[#6A1010] transition"
        >
          {mostrarFormulario ? "Cerrar Formulario" : "Agregar Vehículo"}
        </button>

        {/* Formulario */}
        {mostrarFormulario && (
          <form onSubmit={agregarVehiculo} className="bg-white p-4 shadow-md rounded-md mb-4">
            <input type="text" name="placa" placeholder="Placa" value={nuevoVehiculo.placa} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="text" name="marca" placeholder="Marca" value={nuevoVehiculo.marca} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="text" name="modelo" placeholder="Modelo" value={nuevoVehiculo.modelo} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="number" name="año" placeholder="Año" value={nuevoVehiculo.año} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <textarea name="descripcion" placeholder="Descripción" value={nuevoVehiculo.descripcion} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Guardar Vehículo
            </button>
          </form>
        )}

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400 bg-white shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-500 px-4 py-2">Placa</th>
                <th className="border border-gray-500 px-4 py-2">Marca</th>
                <th className="border border-gray-500 px-4 py-2">Modelo</th>
                <th className="border border-gray-500 px-4 py-2">Año</th>
                <th className="border border-gray-500 px-4 py-2">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.length > 0 ? (
                vehiculos.map((vehiculo, index) => (
                  <tr key={index} className="text-center border-t border-gray-300">
                    <td className="border border-gray-400 px-4 py-2">{vehiculo.placa}</td>
                    <td className="border border-gray-400 px-4 py-2">{vehiculo.marca}</td>
                    <td className="border border-gray-400 px-4 py-2">{vehiculo.modelo}</td>
                    <td className="border border-gray-400 px-4 py-2">{vehiculo.año}</td>
                    <td className="border border-gray-400 px-4 py-2">{vehiculo.descripcion}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-600">No hay vehículos registrados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vehiculos;