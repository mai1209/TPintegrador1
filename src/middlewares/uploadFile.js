
const path = require("path");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/img");
    },
    filename: function (req, file, cb){
        const fileExtension = path.extname(file.originalname);
        const randomName= Date.now() + fileExtension;
        cb(null, randomName);
    },
});

const upload = multer({storage: storage});

module.exports = upload;