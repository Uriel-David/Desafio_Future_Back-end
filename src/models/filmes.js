const Sequelize = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Filme;

const Categoria = require('./categorias');
Filme.belongsToMany(Categoria, {through: 'filmes_categorias'});
