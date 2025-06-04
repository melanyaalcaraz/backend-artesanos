
const amistadesModel = require('../models/amistadesModel');

const solicitarAmistad = (req, res) => {
  const deUsuarioId = req.usuario.id;
  const { para_usuario_id } = req.body;

  if (!para_usuario_id) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  amistadesModel.crearSolicitud(deUsuarioId, para_usuario_id, (err, resultado) => {
    if (err) {
      console.error('❌ Error al enviar solicitud:', err);
      return res.status(500).json({ error: 'Error al enviar solicitud' });
    }

    res.status(201).json({ mensaje: 'Solicitud enviada', id: resultado.insertId });
  });
};

module.exports = { solicitarAmistad };

