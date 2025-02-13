import axios from "axios";

const API_URL = "http://localhost:4000/api/vehiculos";

export const getVehiculos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo vehículos:", error);
    return [];
  }
};

export const agregarVehiculo = async (vehiculo) => {
  try {
    const response = await axios.post(API_URL, vehiculo);
    return response.data;
  } catch (error) {
    console.error("Error agregando vehículo:", error);
    return null;
  }
};
