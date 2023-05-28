const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/CatchAsync');
const { isLoggedIn, isReviewAuthor, validateReview } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review.js');
const reviews = require('../controllers/reviewsController');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;