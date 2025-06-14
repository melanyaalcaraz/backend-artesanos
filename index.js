<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const path = require('path');

  
  // app.use(cors());
  // app.use(express.json());
  const cors = require('cors');
app.use(cors({
  origin: 'https://artesanosalcaraz.netlify.app', // solo Netlify
  credentials: true
}));


  const puerto = 3000;
  
  // Importar rutas
  const rutasUsuarios = require('./routes/usuarios');
  app.use('/api', rutasUsuarios);

  const rutasAmistades = require('./routes/amistades');
  app.use('/api/amistad', rutasAmistades);

  const usuariosRoutes = require('./routes/usuarios');
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
app.use('/api/usuarios', usuariosRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));

const imagenesRoutes = require('./routes/imagenes');
app.use('/api/imagenes', imagenesRoutes);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  

  // Iniciar servidor
  app.listen(puerto, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
  });
 
=======
=======
>>>>>>> Stashed changes

app.use('/api/comentarios', require('./routes/comentarios'));


// Iniciar servidor
app.listen(puerto, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
});

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
