const conexion = require('../base_datos/conexion');

function guardarImagen(usuarioId, titulo, archivo, callback) {
  const sql = 'INSERT INTO imagenes (usuario_id, titulo, url) VALUES (?, ?, ?)';
  conexion.query(sql, [usuarioId, titulo, archivo], callback);
}

function obtenerPorUsuario(usuarioId, callback) {
  const sql = 'SELECT * FROM imagenes WHERE usuario_id = ? ORDER BY creado_en DESC';
  conexion.query(sql, [usuarioId], callback);
}



<<<<<<< Updated upstream
module.exports = {
  guardarImagen,
  obtenerPorUsuario
=======
const obtenerImagenesDeAmigos = (usuarioId, callback) => {
  const sql = `
    SELECT i.*, u.nombre AS autor
    FROM imagenes i
    JOIN usuarios u ON i.usuario_id = u.id
    JOIN amistades a ON (
      (a.de_usuario_id = i.usuario_id AND a.para_usuario_id = ?) OR
      (a.para_usuario_id = i.usuario_id AND a.de_usuario_id = ?)
    )
    WHERE a.estado = 'aceptada'
  `;
  conexion.query(sql, [usuarioId, usuarioId], callback);
};


module.exports = {
  guardarImagen,
  obtenerPorUsuario,
  obtenerImagenesDeAmigos
>>>>>>> Stashed changes
};