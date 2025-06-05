
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
module.exports = { solicitarAmistad };
=======
=======
>>>>>>> Stashed changes
<<<<<<< HEAD

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

const aceptarSolicitud = (req, res) => {
  const { id } = req.params;

  amistadesModel.aceptarSolicitud(id, (err, resultado) => {
    if (err) {
      console.error('❌ Error al aceptar solicitud:', err);
      return res.status(500).json({ error: 'Error al aceptar solicitud' });
    }

    res.json({ mensaje: 'Solicitud aceptada' });
  });
};

const rechazarSolicitud = (req, res) => {
  const { id } = req.params;

  amistadesModel.rechazarSolicitud(id, (err, resultado) => {
    if (err) {
      console.error('❌ Error al rechazar solicitud:', err);
      return res.status(500).json({ error: 'Error al rechazar solicitud' });
    }

    res.json({ mensaje: 'Solicitud rechazada' });
  });
};

module.exports = {
  solicitudesPendientes,
  solicitarAmistad,
  aceptarSolicitud,
  rechazarSolicitud
  
};



=======
module.exports = { solicitarAmistad };
>>>>>>> 5f848d0549014022dd65926cf6a28111a8d2e759
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

