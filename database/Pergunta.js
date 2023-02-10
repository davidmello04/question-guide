const Sequelize = require("sequelize");
const connection = require("./database");

// Model para criação de tabelas - campos e tipos de tabelas
const Pergunta = connection.define("perguntas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});


Pergunta.sync({ force: false }).then(() => {}) // Passa o model para o banco de dados

module.exports = Pergunta