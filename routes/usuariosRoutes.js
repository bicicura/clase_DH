const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuariosController');

router.get('/', controller.index);

router.get('/create', controller.create);

router.post('/store', controller.store);

router.get('/search', controller.search);

router.post('/', controller.search);

router.get('/reviews', controller.logUser);

router.post('/reviews', controller.confirmUser);

router.get('reviews/:id', controller.getReviews);

router.get('/reviews/edit/:id', controller.showEdit);

router.post('/reviews/edit/:id', controller.confirmEdit);

router.get('/reviews/delete/:id', controller.deleteReview);

router.post('/reviews/delete/:id', controller.confirmDelete);

module.exports = router;