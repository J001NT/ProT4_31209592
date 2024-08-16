# Biblioteca API REST
Esta API REST permite gestionar una colección de libros en una base de datos. Los usuarios pueden agregar, consultar, actualizar y eliminar libros mediante solicitudes HTTP.

## Requisitos previos
* Node.js
* Base de datos MySQL

## Instalacion
1. Clona el repositorio `https://github.com/J001NT/ProT4_31209592.git`.
2. Instala las dependencias del proyecto `npm install`

A continuación, se detallan las dependencias del proyecto:

* `express:` Framework web para Node.js, usado para crear la API REST.
* `mysql2:` Librería para conectarse a bases de datos MySQL y realizar consultas.
* `morgan:` Middleware para registrar todas las solicitudes HTTP al servidor.
* `nodemon:` (devDependency): Herramienta que reinicia automáticamente el servidor cuando hay cambios en el código.

3. Importa la base de datos MySQL:
* Dentro del repositorio, en la carpeta `script`, se encuentra un modelo de base de datos que se debe importar, llamada `biblioteca` con una tabla `libros` y un lote de ejemplo ya cargado.

4. Iniciar el servidor: Al iniciar el servidor, se encontrara corriendo en `http://localhost:3000`.

## Endpoints
1. Obtener todos los libros
* URL: /libros
* Método: GET
* Descripción: Devuelve una lista de todos los libros en la base de datos.
* Ejemplo: `localhost:3000/libros`

2. Obtener un libro por ID
* URL: /libros/:id
* Método: GET
* Descripción: Devuelve un libro según el id proporcionado.
* Ejemplo: `localhost:3000/libros/02`

3. Agregar un nuevo libro
* URL: /libros
* Método: POST
* Descripción: Agrega un nuevo libro a la base de datos.
* Ejemplo: `localhost:3000/libros`

4. Actualizar un libro
* URL: /libros/:id
* Método: PUT
* Descripción: Actualiza los datos de un libro existente.
* Ejemplo: `localhost:3000/libros/05`

5. Eliminar un libro por ISBN
* URL: /libros/isbn/:isbn
* Método: DELETE
* Descripción: Elimina un libro de la base de datos según su ISBN.
* Ejemplo: `localhost:3000/libros/isbn/1234567890123`


### Errores comunes
* 400 Bad Request: Ocurre cuando se envían datos inválidos o faltan campos obligatorios.
* 404 Not Found: Ocurre cuando no se encuentra un libro para el id o ISBN proporcionado.
* 500 Internal Server Error: Error en el servidor, generalmente relacionado con la base de datos o la lógica de la API.


