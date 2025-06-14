const comentariosModel = require('../models/comentariosModel');

// 👉 Agregar un comentario a una imagen
const agregarComentario = (req, res) => {
  const usuarioId = req.usuario.id; // viene del token
  const { imagen_id, texto } = req.body;

  if (!imagen_id || !texto) {
    return res.status(400).json({ error: 'Faltan datos para comentar.' });
  }

  comentariosModel.agregarComentario(usuarioId, imagen_id, texto, (err, resultado) => {
    if (err) {
      console.error('❌ Error al agregar comentario:', err);
      return res.status(500).json({ error: 'Error al comentar' });
    }

    res.status(201).json({ mensaje: 'Comentario agregado con éxito' });
  });
};

// 👉 Obtener los comentarios de una imagen
const obtenerComentarios = (req, res) => {
  const imagenId = req.params.id;

  comentariosModel.obtenerComentariosPorImagen(imagenId, (err, comentarios) => {
    if (err) {
      console.error('❌ Error al obtener comentarios:', err);
      return res.status(500).json({ error: 'Error al obtener comentarios' });
    }

    res.json(comentarios);
  });
};

module.exports = {
  agregarComentario,
  obtenerComentarios
};
