const Sequelize = require("sequelize");

const connection = new Sequelize("guiadeperguntas", "root", "vasco1234dvb", {
    host: "127.0.0.1",
    dialect: "mysql",
});

module.exports = connection;
