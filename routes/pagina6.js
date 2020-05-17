const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagina6Controller')

router.get('/', controller.index)

module.exports = router;