const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagina5Controller')

router.get('/', controller.index)

module.exports = router;