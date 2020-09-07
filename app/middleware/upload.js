const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, name);
    }
});

const upload = multer({storage: storage}).single('file');
// const uploadImage = multer({storage: storage}).single('file_image');
const uploadImage = multer({storage: storage}).array('uploads[]', 3);

module.exports = upload;
module.exports = uploadImage;
