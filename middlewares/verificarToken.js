const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
<<<<<<< Updated upstream
    const decoded = jwt.verify(token, 'CLAVE_SECRETA'); // Reemplazá por tu clave real
=======
    const decoded = jwt.verify(token, 'CLAVE_SECRETA'); 
>>>>>>> Stashed changes
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
}


module.exports = verificarToken;
