
const amistadesModel = require('../models/amistadesModel');

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
// const solicitarAmistad = (req, res) => {
//   const deUsuarioId = req.usuario.id;
//   const { para_usuario_id } = req.body;

//   if (!para_usuario_id) {
//     return res.status(400).json({ error: 'Faltan datos' });
//   }

//   amistadesModel.crearSolicitud(deUsuarioId, para_usuario_id, (err, resultado) => {
//     if (err) {
//       console.error('❌ Error al enviar solicitud:', err);
//       return res.status(500).json({ error: 'Error al enviar solicitud' });
//     }

//     res.status(201).json({ mensaje: 'Solicitud enviada', id: resultado.insertId });
//   });
// };

<<<<<<< Updated upstream
=======
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
const solicitarAmistad = (req, res) => {
  const deUsuarioId = req.usuario.id;
  const { para_usuario_id } = req.body;

  if (!para_usuario_id) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
    return res.status(400).json({ error: 'Faltan datos: para_usuario_id es obligatorio' });
  }

  if (deUsuarioId === para_usuario_id) {
    return res.status(400).json({ error: 'No podés enviarte solicitud a vos misma' });
  }

  amistadesModel.verificarRelacionExistente(deUsuarioId, para_usuario_id, (err, resultados) => {
    if (err) {
      console.error('❌ Error al verificar relación:', err);
      return res.status(500).json({ error: 'Error al verificar relación' });
    }

    if (resultados.length > 0) {
      const estado = resultados[0].estado;
      if (estado === 'pendiente') {
        return res.status(400).json({ error: 'Ya enviaste una solicitud a esta persona' });
      } else if (estado === 'aceptada') {
        return res.status(400).json({ error: 'Ya sos amigo de esta persona' });
      }
    }

    amistadesModel.crearSolicitud(deUsuarioId, para_usuario_id, (err, resultado) => {
      if (err) {
        console.error('❌ Error al enviar solicitud:', err);
        return res.status(500).json({ error: 'Error al enviar solicitud' });
      }

      res.status(201).json({ mensaje: 'Solicitud enviada', id: resultado.insertId });
    });
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
    return res.status(400).json({ error: 'Faltan datos' });
  }

  amistadesModel.crearSolicitud(deUsuarioId, para_usuario_id, (err, resultado) => {
    if (err) {
      console.error('❌ Error al enviar solicitud:', err);
      return res.status(500).json({ error: 'Error al enviar solicitud' });
    }

    res.status(201).json({ mensaje: 'Solicitud enviada', id: resultado.insertId });
<<<<<<< Updated upstream
=======
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  });
};


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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< HEAD


=======
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======


>>>>>>> Stashed changes
module.exports = {
  solicitudesPendientes,
  solicitarAmistad,
  aceptarSolicitud,
  rechazarSolicitud
  
};




