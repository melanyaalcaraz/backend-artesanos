const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verificarToken = require('../middlewares/verificarToken');
const imagenesController = require('../controllers/imagenesController');

router.post('/', verificarToken, upload.single('imagen'), imagenesController.subirImagen);

router.get('/', verificarToken, imagenesController.obtenerImagenesUsuario);


<<<<<<< Updated upstream
=======
router.get('/compartidas', verificarToken, imagenesController.obtenerImagenesCompartidas);



>>>>>>> Stashed changes
module.exports = router;
