const conexion = require('../base_datos/conexion');
const agregarComentario = (usuarioId, imagenId, texto, callback) => {
  const sql = `
    INSERT INTO comentarios (autor_id, imagen_id, texto)
    VALUES (?, ?, ?)
  `;
  conexion.query(sql, [usuarioId, imagenId, texto], callback);
};

const obtenerComentariosPorImagen = (imagenId, callback) => {
  const sql = `
    SELECT c.id, c.texto, u.nombre AS autor, c.creado_en
    FROM comentarios c
    JOIN usuarios u ON c.autor_id = u.id
    WHERE c.imagen_id = ?
    ORDER BY c.creado_en DESC
  `;
  conexion.query(sql, [imagenId], callback);
};

module.exports = {
  agregarComentario,
  obtenerComentariosPorImagen
};
