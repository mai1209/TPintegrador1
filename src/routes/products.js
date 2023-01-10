

const express = require('express');
const { update } = require('../controllers/productsController');
const controller = require('../controllers/productsController');
const router = express.Router();
const hello = require ("../middlewares/helloWorld");
//middlewares de multer.
const upload = require("../middlewares/uploadFile")



router.get('/', hello ,controller.home);
router.get('/detail/:id',controller.detail);
router.get('/form',controller.form);
router.post('/form', upload.single("img"),controller.store);
router.get('/edit/:id', controller.edit);
router.post('/edit/:id',upload.single("img"), controller.update);
router.get('/delete/:id', controller.delete);
router.post('/delete/:id',controller.destroy);

//falta : no se ve la imagen y no se borra de la carpeta img

module.exports = router;

