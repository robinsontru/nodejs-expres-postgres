import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "postgres", // db name,
  "postgres", // username
  "root", // password
  {
    host: "localhost",
    dialect: "postgres",
    port:"5433"
  
  }
);