import Express from 'express';
import bodyParser from 'body-parser';
import FilmeController from './controllers/filmesController';

const sequelize = require('./config/database');
const routesFilme = require('./routes/filmesRoute');
const routesCategoria = require('./routes/categoriasRoute');

const app = Express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use(routesFilme);
app.use(routesCategoria);

sequelize.sync().then(() => {
    app.listen(port, () => console.log('Api rodando na porta 3000'))
});
