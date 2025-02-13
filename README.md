# Taller de Vehículos - Modulo Web

## Descripción

Este es un proyecto web desarrollado con **React** y **Tailwind CSS** para el frontend, y **Express** para el backend. La aplicación está diseñada para gestionar vehículos en un taller, permitiendo a los usuarios visualizar los vehículos registrados en una tabla, así como agregar nuevos vehículos a través de un formulario. La información de los vehículos se almacena en un archivo `.json`.

## Funcionalidad

- **Visualización de Vehículos**: Permite ver todos los vehículos registrados en una tabla.
- **Agregar Vehículo**: Un botón "Agregar Vehículo" que despliega un formulario para ingresar los datos de un nuevo vehículo.
- **Guardar Vehículo**: Una vez ingresados los datos, el formulario tiene un botón "Guardar Vehículo" que almacena la información en un archivo `.json` y la muestra inmediatamente en la tabla.
- **Interactividad en Tiempo Real**: La tabla se actualiza automáticamente para reflejar los cambios sin necesidad de recargar la página.

## Requisitos

- **Node.js** (para ejecutar el servidor y el frontend)
- **npm** (para gestionar dependencias)
- Un navegador web para acceder a la interfaz de usuario

## Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/Juan520dlc/prueba.git
    ```

2. Navega a la carpeta del proyecto:
    ```bash
    cd prueba
    ```

3. Instala las dependencias tanto para el frontend como para el backend:
    - Para el frontend (React y Tailwind CSS):
        ```bash
        cd taller-frontend
        npm install
        ```
    - Para el backend (Express):
        ```bash
        cd ../taller-backend
        npm install
        ```

4. Inicia el backend (servidor Express):
    ```bash
    cd taller-backend
    npm start
    ```

5. Inicia el frontend (aplicación React):
    ```bash
    cd taller-frontend
    npm start
    ```

6. Accede a la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).
