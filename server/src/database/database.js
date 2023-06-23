import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "backend", {
  host: "localhost",
  dialect: "postgres",
});


