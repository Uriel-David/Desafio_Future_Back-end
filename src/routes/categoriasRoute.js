// Require para funcionamento das rotas
const router = require('express').Router();
const CategoriaController = require('../controllers/categoriasController');

// criação das rotas da API
router.get('/categorias', CategoriaController.getCategoria);
router.post('/categorias', CategoriaController.postCategoria);
router.put('/categorias/:id', CategoriaController.putCategoria);
router.delete('/categorias/:id', CategoriaController.deleteCategoria);

// Exportação das rotas
module.exports = router;
