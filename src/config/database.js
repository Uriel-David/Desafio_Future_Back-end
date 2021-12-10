// Require para funcionamento da base de dados
const Sequelize = require('sequelize');

// Criação da classe de configuração da base de dados
const sequelize = new Sequelize({
    host: 'localhost',
    database: 'desafio_future_backend',
    username: 'postgres',
    password: 'root',
    dialect: 'postgres',
    port: 5432,
    logging: false
});

// Exportação das configurações da base de dados
module.exports = sequelize;

// Teste da conexão da base de dados
async function test() {
    try {
        let result = await sequelize.authenticate();
        console.log("Sequelize realizou a conexão com o banco de dados com sucesso!");
    }
    catch(error) {
        console.error("Houve um erro ao conectar com o banco de dados:");
        console.error(error);
        process.exit();
    }
  }

// Função para teste da base de dados
test();
