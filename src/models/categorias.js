const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categorias', {
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Categoria;

const Filme = require('./filmes');
Categoria.belongsToMany(Filme, {through: 'filmes_categorias'});
