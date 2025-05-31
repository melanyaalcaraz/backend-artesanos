const conexion = require('../base_datos/conexion');

const crearUsuario = (usuarios, callback) => {
  const sql = 'INSERT INTO usuarios SET ?';
  conexion.query(sql, usuarios, callback);
};
const obtenerPorEmail = (email, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  conexion.query(sql, [email], (err, resultados) => {
    if (err) return callback(err);
    if (resultados.length === 0) return callback(null, null);
    callback(null, resultados[0]);
  });
};

module.exports = {
  crearUsuario,
  obtenerPorEmail
};

