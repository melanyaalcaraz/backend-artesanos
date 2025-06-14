const express = require('express');
const router = express.Router();


const verificarToken = require('../middlewares/verificarToken');

const { solicitarAmistad } = require('../controllers/amistadesController');
router.post('/solicitar', verificarToken, solicitarAmistad);


const { solicitudesPendientes } = require('../controllers/amistadesController');
router.get('/pendientes', verificarToken, solicitudesPendientes);


const { aceptarSolicitud } = require('../controllers/amistadesController');
router.put('/aceptar/:id', verificarToken, aceptarSolicitud);


const { rechazarSolicitud } = require('../controllers/amistadesController');
router.put('/rechazar/:id', verificarToken, rechazarSolicitud);

module.exports = router;
