const sequelize = require('../config/database');

const models = {
    Filme: require('./filmes'),
    Categoria: require('./categorias'),
    sequelize: sequelize
}

module.exports = models;
