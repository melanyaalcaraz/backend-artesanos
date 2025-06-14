const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');
const verificarToken = require('../middlewares/verificarToken');

// Ruta para comentar una imagen
router.post('/', verificarToken, comentariosController.agregarComentario);

// Ruta para obtener comentarios de una imagen
router.get('/:id', verificarToken, comentariosController.obtenerComentarios);

module.exports = router;
