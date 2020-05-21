const express = require('express');
const router = express.Router();

const controller = require('../controllers/reviewsController');

router.get('/', controller.index);

router.get('/create', controller.create);

router.post('/store', controller.store);

module.exports = router;