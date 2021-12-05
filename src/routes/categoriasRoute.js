const router = require('express').Router();
const CategoriaController = require('../controllers/categoriasController');

router.get('/categorias', CategoriaController.getCategoria);
router.post('/categorias', CategoriaController.postCategoria);
router.put('/categorias/:id', CategoriaController.putCategoria);
router.delete('/categorias/:id', CategoriaController.deleteCategoria);

module.exports = router;
