const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream
// const { enviarSolicitud } = require('../controllers/amistadesController');

// router.post('/solicitar', enviarSolicitud);
=======
<<<<<<< HEAD

=======
// const { enviarSolicitud } = require('../controllers/amistadesController');

// router.post('/solicitar', enviarSolicitud);
>>>>>>> 5f848d0549014022dd65926cf6a28111a8d2e759
>>>>>>> Stashed changes

const verificarToken = require('../middlewares/verificarToken');
const { solicitarAmistad } = require('../controllers/amistadesController');

router.post('/solicitar', verificarToken, solicitarAmistad);
<<<<<<< Updated upstream
module.exports = router;
=======
<<<<<<< HEAD
const { solicitudesPendientes } = require('../controllers/amistadesController');
router.get('/pendientes', verificarToken, solicitudesPendientes);

const { aceptarSolicitud } = require('../controllers/amistadesController');
router.put('/aceptar/:id', verificarToken, aceptarSolicitud);
const { rechazarSolicitud } = require('../controllers/amistadesController');
router.put('/rechazar/:id', verificarToken, rechazarSolicitud);

module.exports = router;

=======
module.exports = router;
>>>>>>> 5f848d0549014022dd65926cf6a28111a8d2e759
>>>>>>> Stashed changes
