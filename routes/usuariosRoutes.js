const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuariosController');

router.get('/', controller.index);

router.get('/create', controller.create);

router.get('/search', controller.search);

router.post('/store', controller.store);

module.exports = router;