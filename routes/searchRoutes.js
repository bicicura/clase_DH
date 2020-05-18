const express = require('express');
const router = express.Router();

const controller = require('../controllers/searchController')

router.get('/', controller.index)

module.exports = router;