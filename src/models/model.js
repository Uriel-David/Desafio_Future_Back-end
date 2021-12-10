// Require para importar as configurações da base de dados
const sequelize = require('../config/database');

// Importação dos modelos "Filmes" e "Categorias"
// e das configurações da base de dados em uma constante
const models = {
    Filme: require('./filmes'),
    Categoria: require('./categorias'),
    sequelize: sequelize
}

// Exportação da constante contendo todos os modelos
// e configurações da base de dados
module.exports = models;
