// Importações para funcionamento do app
import Express from 'express';
import bodyParser from 'body-parser';
import FilmeController from './controllers/filmesController';
// Require para funcionamento do app
const sequelize = require('./config/database');
const routesFilme = require('./routes/filmesRoute');
const routesCategoria = require('./routes/categoriasRoute');

const app = Express();
const port = 3000;

// permite a inserção de dados por meio de corpo json
app.use(bodyParser.json());

// Rota padrão mínima para testar se o servidor está online
app.get('/', (req, res) => res.send('Hello World!'));

// Importações de rotas
app.use(routesFilme);
app.use(routesCategoria);

// Função para manter a sincronização da base de dados com o servidor do app
sequelize.sync().then(() => {
    app.listen(port, () => console.log('Api rodando na porta 3000'))
});
