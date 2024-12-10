# API Rest profesional con MySQL

Ejecutar los siguientes pasos

- Instalar el nodeJS
- Luego ejecutar en la carpeta creada para el proyecto npm init -y
- Instalar express con npm install express
- Instalar nodemon con npm install nodemon -D   (“-D” para que lo instale en el apartado Dev de package.json)
- Luego agregar la siguiente línea en el script
   "scripts": {
    "dev": "nodemon index.js"}
- A partir de acá para ejecutar el proyecto debemos hacerlo con npm run dev (llamará al comando que se encuentre en el script “dev”)


- Para poder ejecutar el docker compuse debemos instalar la imagen de MySql y así tener la base de datos en un docker o sino utilizar una BD en la nube


- Crear un archivo de variables de entorno con los siguientes datos o con los propios que tenga el entorno donde se instala la API:

PORT=3000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=root

DB_DATABASE=companydb

DB_PORT=3306
