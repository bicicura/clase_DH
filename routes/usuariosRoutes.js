const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuariosController');

router.get('/', controller.index);

router.get('/create', controller.create);

router.post('/store', controller.store);

router.get('/search', controller.search);

router.post('/', controller.search);

module.exports = router;