
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/imagenes');
  },
  filename: (req, file, cb) => {
<<<<<<< Updated upstream
    // const ext = path.extname(file.originalname);
    // const nombreFinal = Date.now() + '-' + file.originalname;
=======
>>>>>>> Stashed changes
    const nombreFinal = Date.now() + '-' + file.originalname.replace(/\s+/g, '_').replace(/[()]/g, '');

    cb(null, nombreFinal);
  }
});

const upload = multer({ storage });

module.exports = upload;