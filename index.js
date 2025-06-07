  const express = require('express');
  const cors = require('cors');
  const app = express();
  const path = require('path');

  
  app.use(cors());
  app.use(express.json());
  
  const puerto = 3000;
  
  // Importar rutas
  const rutasUsuarios = require('./routes/usuarios');
  app.use('/api', rutasUsuarios);

  const rutasAmistades = require('./routes/amistades');
  app.use('/api/amistad', rutasAmistades);

  const usuariosRoutes = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRoutes);

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
app.use('/public', express.static(path.join(__dirname, 'public')));

const imagenesRoutes = require('./routes/imagenes');
app.use('/api/imagenes', imagenesRoutes);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> 3b4ec40570cce82e3185e150a561d9489812b0bb
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  

  // Iniciar servidor
  app.listen(puerto, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
  });
 
