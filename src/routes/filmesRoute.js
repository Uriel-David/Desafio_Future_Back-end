const router = require('express').Router();
const FilmeController = require('../controllers/filmesController');

router.get('/filmes', FilmeController.getFilme);
router.get('/filmes/categoria/:CategoriaId', FilmeController.getFilmeCategoria);
router.get('/filmes/genero/:genero', FilmeController.getFilmeGenero);
router.post('/filmes', FilmeController.postFilme);
router.put('/filmes/:id', FilmeController.putFilme);
router.delete('/filmes/:id', FilmeController.deleteFilme);

module.exports = router;
