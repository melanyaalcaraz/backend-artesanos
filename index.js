  const express = require('express');
  const cors = require('cors');
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  const puerto = 3000;
  
  // Importar rutas
  const rutasUsuarios = require('./routes/usuarios');
  app.use('/api', rutasUsuarios);
  
  // Iniciar servidor
  app.listen(puerto, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
  });