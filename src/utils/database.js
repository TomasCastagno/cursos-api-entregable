const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "cursos_api", // nombre de la base de datos en donde realizarás tu conexión
  username: "postgres", // nombre del usuario propietario de la base de datos
  host: "localhost", // el host donde se encuentra tu base de datos
  port: "5432", // el puerto de conexión a tu base de datos (puede ser igual 5433)
  password: "root", // la contraseña del usuario en postgres
  dialect: "postgres", // el dialecto de la base de datos que estamos usando
  logging: false,
});

module.exports = db;
