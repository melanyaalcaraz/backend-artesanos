const conexion = require('../base_datos/conexion');

function guardarImagen(usuarioId, titulo, archivo, callback) {
  const sql = 'INSERT INTO imagenes (usuario_id, titulo, url) VALUES (?, ?, ?)';
  conexion.query(sql, [usuarioId, titulo, archivo], callback);
}

function obtenerPorUsuario(usuarioId, callback) {
  const sql = 'SELECT * FROM imagenes WHERE usuario_id = ? ORDER BY creado_en DESC';
  conexion.query(sql, [usuarioId], callback);
}



module.exports = {
  guardarImagen,
  obtenerPorUsuario
};