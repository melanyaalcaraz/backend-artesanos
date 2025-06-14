const express = require('express');
const router = express.Router();
const { buscarUsuarios } = require('../controllers/usuariosController');
const verificarToken = require('../middlewares/verificarToken');

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Ruta para buscar usuarios por nombre o email
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
router.get('/buscar', verificarToken, buscarUsuarios)

const { registrarUsuario, loginUsuario } = require('../controllers/usuariosController');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);

module.exports = router;
