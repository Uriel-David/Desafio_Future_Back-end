// Require para funcionamento dos modelos da base de dados
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo da tabela "Filmes" a ser criada
const Filme = sequelize.define('Filmes', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Exporta o modelo da tabela "Filmes"
module.exports = Filme;

// Require para o modelo de tabela Categorias
//para enfim gerar uma tabela intermediária entre Filmes e Categorias
const Categoria = require('./categorias');
Filme.belongsToMany(Categoria, {through: 'filmes_categorias'});
