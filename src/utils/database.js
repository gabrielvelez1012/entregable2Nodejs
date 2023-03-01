const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "entregable2",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "root",
    dialect: "postgres"
});

module.exports = db;