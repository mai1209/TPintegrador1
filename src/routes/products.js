const express = require('express');
const controller = require('../controllers/productsController');
const router = express.Router();

router.get('/', controller.home);
router.get('/detail/:id',controller.detail);
router.get('/form',controller.form);
router.get('/edit',controller.edit);

module.exports = router;


