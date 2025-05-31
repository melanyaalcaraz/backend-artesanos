const bcrypt = require('bcrypt');
const usuariosModel = require('../models/usuariosModel');

const registrarUsuario = async (req, res) => {
  const { nombre, email, password, imagen_perfil } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const usuario = {
    nombre,
    email,
    password: hashedPassword,
    imagen_perfil: imagen_perfil || 'default.jpg'
  };

  usuariosModel.crearUsuario(usuario, (err, resultado) => {
    if (err) {
      console.error('❌ ERROR AL REGISTRAR:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
   
      res.status(201).json({
    mensaje: 'Usuario registrado correctamente!',
    id: resultado.insertId
  });
  });  


};

const jwt = require('jsonwebtoken');

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  usuariosModel.obtenerPorEmail(email, async (err, usuario) => {
    if (err) {
      console.error('❌ Error en login:', err);
      return res.status(500).json({ error: 'Error al buscar usuario' });
    }

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    console.log('📧 Email ingresado:', email);
    console.log('🔍 Usuario encontrado:', usuario);

    const esValida = await bcrypt.compare(password, usuario.password);
    console.log('🔑 Contraseña válida:', esValida);

    if (!esValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre },
      'CLAVE_SECRETA', // podés usar un .env para esto
      { expiresIn: '2h' }
    );

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } });
  });
};


module.exports = {
  registrarUsuario,
  loginUsuario
};
