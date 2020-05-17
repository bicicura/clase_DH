const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagina3Controller')

router.get('/', controller.index)

module.exports = router;