const express = require('express');
const router = express.Router();
const { buscarUsuarios } = require('../controllers/usuariosController');
const verificarToken = require('../middlewares/verificarToken');


router.get('/buscar', verificarToken, buscarUsuarios)

const { registrarUsuario, loginUsuario } = require('../controllers/usuariosController');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);

module.exports = router;