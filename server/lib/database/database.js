import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "m064Tt0FkWUHNmDVCyvy", {
  host: "containers-us-west-153.railway.app",
  logging: false,
  dialect: "postgres",
  port: 5616
});