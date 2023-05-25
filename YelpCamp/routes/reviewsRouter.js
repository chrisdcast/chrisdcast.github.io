const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/CatchAsync');
const { reviewSchema } = require('../Schemas');
const { isLoggedIn } = require('../middleware');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const Review = require('../models/review.js');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.post('/', isLoggedIn, validateReview, catchAsync(async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'New review posted!');
    res.redirect(`/campgrounds/${campground.id}`);
}))

router.delete('/:reviewId', isLoggedIn, catchAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted');
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;