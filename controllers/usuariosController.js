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


const conexion = require('../base_datos/conexion');

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
// const buscarUsuarios = (req, res) => {
//   const { q } = req.query;
//   const usuarioActualId = req.usuario.id;

//   const sql = `
//     SELECT id, nombre, email FROM usuarios
//     WHERE (nombre LIKE ? OR email LIKE ?)
//       AND id != ?
//   `;

//   const valor = `%${q}%`;

//   conexion.query(sql, [valor, valor, usuarioActualId], (err, resultados) => {
//     if (err) {
//       console.error('❌ Error al buscar usuarios:', err);
//       return res.status(500).json({ error: 'Error al buscar usuarios' });
//     }

//     res.json(resultados);
//   });
// };



const buscarUsuarios = (req, res) => {
  const { q } = req.query;
  const usuarioId = req.usuario.id;

  const sql = `
    SELECT u.id, u.nombre, u.email,
      (SELECT estado FROM amistades
       WHERE (de_usuario_id = ? AND para_usuario_id = u.id)
          OR (de_usuario_id = u.id AND para_usuario_id = ?)
       LIMIT 1) AS estado_amistad
    FROM usuarios u
    WHERE (u.nombre LIKE ? OR u.email LIKE ?)
      AND u.id != ?
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
const buscarUsuarios = (req, res) => {
  const { q } = req.query;
  const usuarioActualId = req.usuario.id;

  const sql = `
    SELECT id, nombre, email FROM usuarios
    WHERE (nombre LIKE ? OR email LIKE ?)
      AND id != ?
<<<<<<< Updated upstream
=======
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  `;

  const valor = `%${q}%`;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  conexion.query(sql, [valor, valor, usuarioActualId], (err, resultados) => {
=======
<<<<<<< HEAD
  conexion.query(sql, [usuarioId, usuarioId, valor, valor, usuarioId], (err, resultados) => {
=======
  conexion.query(sql, [valor, valor, usuarioActualId], (err, resultados) => {
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
  conexion.query(sql, [usuarioId, usuarioId, valor, valor, usuarioId], (err, resultados) => {
>>>>>>> Stashed changes
=======
  conexion.query(sql, [usuarioId, usuarioId, valor, valor, usuarioId], (err, resultados) => {
>>>>>>> Stashed changes
=======
  conexion.query(sql, [usuarioId, usuarioId, valor, valor, usuarioId], (err, resultados) => {
>>>>>>> Stashed changes
    if (err) {
      console.error('❌ Error al buscar usuarios:', err);
      return res.status(500).json({ error: 'Error al buscar usuarios' });
    }

    res.json(resultados);
  });
};




<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
<<<<<<< HEAD
=======

>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
module.exports = {
  registrarUsuario,
  loginUsuario,
  buscarUsuarios
};
