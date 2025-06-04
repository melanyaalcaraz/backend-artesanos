// const conexion = require('../base_datos/conexion');

// const crearSolicitud = (de_usuario_id, para_usuario_id, callback) => {
//   const sql = 'INSERT INTO amistades (de_usuario_id, para_usuario_id, estado) VALUES (?, ?, "pendiente")';
//   conexion.query(sql, [de_usuario_id, para_usuario_id], callback);
// };

// module.exports = {
//   crearSolicitud
// };
const conexion = require('../base_datos/conexion');

function crearSolicitud(deId, paraId, callback) {
  const sql = `
    INSERT INTO amistades (de_usuario_id, para_usuario_id, estado)
    VALUES (?, ?, 'pendiente')
  `;
  conexion.query(sql, [deId, paraId], callback);
}

module.exports = {
  crearSolicitud
};

