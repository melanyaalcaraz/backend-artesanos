const imagenesModel = require('../models/imagenesModel');

const subirImagen = (req, res) => {
  const usuarioId = req.usuario.id;
  const { titulo } = req.body;
  const archivo = req.file;

  if (!archivo || !titulo) {
    return res.status(400).json({ error: 'Faltan datos o imagen' });
  }

  imagenesModel.guardarImagen(usuarioId, titulo, archivo.filename, (err, resultado) => {
    if (err) {
      console.error('❌ Error al guardar imagen:', err);
      return res.status(500).json({ error: 'Error interno al subir imagen' });
    }

    res.status(201).json({ mensaje: 'Imagen subida correctamente' });
  });
};

const obtenerImagenesUsuario = (req, res) => {
  const usuarioId = req.usuario.id;

  imagenesModel.obtenerPorUsuario(usuarioId, (err, imagenes) => {
    if (err) {
      console.error('❌ Error al obtener imágenes:', err);
      return res.status(500).json({ error: 'Error al obtener imágenes' });
    }

    res.json(imagenes);
  });
};


const obtenerImagenesCompartidas = (req, res) => {
  const usuarioId = req.usuario.id;

  imagenesModel.obtenerImagenesDeAmigos(usuarioId, (err, imagenes) => {
    if (err) {
      console.error('❌ Error al obtener imágenes compartidas:', err);
      return res.status(500).json({ error: 'Error al obtener imágenes de tus contactos' });
    }

    res.json(imagenes);
  });
};

module.exports = {
  subirImagen,
  obtenerImagenesUsuario,
  obtenerImagenesCompartidas 
};