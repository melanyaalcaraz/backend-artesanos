const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
// const { enviarSolicitud } = require('../controllers/amistadesController');

// router.post('/solicitar', enviarSolicitud);
=======
=======
>>>>>>> Stashed changes
<<<<<<< HEAD

=======
// const { enviarSolicitud } = require('../controllers/amistadesController');

// router.post('/solicitar', enviarSolicitud);
>>>>>>> 5f848d0549014022dd65926cf6a28111a8d2e759
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const verificarToken = require('../middlewares/verificarToken');
const { solicitarAmistad } = require('../controllers/amistadesController');

router.post('/solicitar', verificarToken, solicitarAmistad);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
module.exports = router;
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
