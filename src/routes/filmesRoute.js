const router = require('express').Router();
const FilmeController = require('../controllers/filmesController');

router.get('/filmes', FilmeController.getFilme);
router.post('/filmes', FilmeController.postFilme);
router.put('/filmes/:id', FilmeController.putFilme);
router.delete('/filmes/:id', FilmeController.deleteFilme);

module.exports = router;
