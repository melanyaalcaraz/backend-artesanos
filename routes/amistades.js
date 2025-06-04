const express = require('express');
const router = express.Router();
// const { enviarSolicitud } = require('../controllers/amistadesController');

// router.post('/solicitar', enviarSolicitud);

const verificarToken = require('../middlewares/verificarToken');
const { solicitarAmistad } = require('../controllers/amistadesController');

router.post('/solicitar', verificarToken, solicitarAmistad);
module.exports = router;