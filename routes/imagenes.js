const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verificarToken = require('../middlewares/verificarToken');
const imagenesController = require('../controllers/imagenesController');

router.post('/', verificarToken, upload.single('imagen'), imagenesController.subirImagen);

router.get('/', verificarToken, imagenesController.obtenerImagenesUsuario);


module.exports = router;
