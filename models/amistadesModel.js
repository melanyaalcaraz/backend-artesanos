const conexion = require('../base_datos/conexion');

function crearSolicitud(deId, paraId, callback) {
  const sql = `
    INSERT INTO amistades (de_usuario_id, para_usuario_id, estado)
    VALUES (?, ?, 'pendiente')
  `;
  conexion.query(sql, [deId, paraId], callback);
}


function obtenerSolicitudesPendientes(usuarioId, callback) {
  const sql = `
    SELECT a.id, u.nombre AS nombre_emisor, u.email
    FROM amistades a
    JOIN usuarios u ON a.de_usuario_id = u.id
    WHERE a.para_usuario_id = ? AND a.estado = 'pendiente'
  `;
  conexion.query(sql, [usuarioId], callback);
}


const solicitudesPendientes = (req, res) => {
  const usuarioId = req.usuario.id;

  amistadesModel.obtenerSolicitudesPendientes(usuarioId, (err, resultados) => {
    if (err) {
      console.error('❌ Error al obtener solicitudes pendientes:', err);
      return res.status(500).json({ error: 'Error al obtener solicitudes' });
    }

    res.json(resultados);
  });
};

function aceptarSolicitud(id, callback) {
  const sql = `UPDATE amistades SET estado = 'aceptada' WHERE id = ?`;
  conexion.query(sql, [id], callback);
}

function rechazarSolicitud(id, callback) {
  const sql = `UPDATE amistades SET estado = 'rechazada' WHERE id = ?`;
  conexion.query(sql, [id], callback);
}


module.exports = {
  crearSolicitud,
  solicitudesPendientes,
  obtenerSolicitudesPendientes,
  aceptarSolicitud,
  rechazarSolicitud
};

