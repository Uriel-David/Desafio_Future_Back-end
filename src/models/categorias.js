// Require para funcionamento dos modelos da base de dados
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo da tabela "Categoria" a ser criada
const Categoria = sequelize.define('Categorias', {
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Exporta o modelo da tabela "Categoria"
module.exports = Categoria;

// Require para o modelo de tabela Filmes
//para enfim gerar uma tabela intermediária entre Filmes e Categorias
const Filme = require('./filmes');
Categoria.belongsToMany(Filme, {through: 'filmes_categorias'});
