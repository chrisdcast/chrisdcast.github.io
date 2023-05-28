const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/CatchAsync');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/usersController');

router.get('/register', users.renderRegisterForm);

router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLogin);

router.post('/login',
    storeReturnTo,
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
    users.login);

router.get('/logout', )

module.exports = router;