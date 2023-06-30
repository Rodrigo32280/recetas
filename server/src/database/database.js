import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "Aioros0980369953", {
  host: "localhost",
  dialect: "postgres",
});


