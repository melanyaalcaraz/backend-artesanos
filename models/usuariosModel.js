const db = require('../base_datos/conexion');

// Crear un nuevo usuario
function crearUsuario(usuario, callback) {
  const sql = 'INSERT INTO usuarios (nombre, email, password, imagen_perfil) VALUES (?, ?, ?, ?)';
  const valores = [usuario.nombre, usuario.email, usuario.password, usuario.imagen_perfil];
  db.query(sql, valores, callback);
}

// Obtener un usuario por email (para login)
function obtenerPorEmail(email, callback) {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(sql, [email], (err, resultados) => {
    if (err) return callback(err, null);
    if (resultados.length === 0) return callback(null, null); 
    return callback(null, resultados[0]);
  });
}

//  Obtener todos los usuarios
function obtenerTodos(callback) {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, callback);
}

module.exports = {
  crearUsuario,
  obtenerPorEmail,
  obtenerTodos
};


