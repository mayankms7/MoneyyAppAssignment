const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/getAllReviews', reviewController.getAllReviews);
router.post('/createReview', reviewController.createReview);
router.delete('/deleteReview/:id', reviewController.deleteReview);

module.exports = router;
