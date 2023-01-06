

const express = require('express');
const controller = require('../controllers/productsController');
const router = express.Router();
const hello = require ("../middlewares/helloWorld");
const uploadFile =require ("../middlewares/uploadFile")



router.get('/', hello ,controller.home);
router.get('/detail/:id',controller.detail);
router.get('/form',controller.form);
router.post('/form', uploadFile.single("img"),controller.store);
router.get('/edit', controller.edit);
//FALTO EDITAR PRODUCTO.

module.exports = router;


