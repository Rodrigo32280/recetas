import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetas", "postgres", "rodrigo", {
  host: "localhost",
  loging: false,
  dialect: "postgres",
  port:5432
});
