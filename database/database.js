const Sequelize = require("sequelize");

const connection = new Sequelize("guiadeperguntas", "root", "vasco1234dvb", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;
