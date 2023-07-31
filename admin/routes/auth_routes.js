const express = require('express');
const router = express.Router();
const { adminForwardAuthenticate, adminCheckSession} = require('../../middlewares/checksession');

//require the controllers from the controllers route
const { auth_controllers} = require('../controllers/index');

const {
    displayLogin,
    handleLogin,
    authorization,
    logout
} = auth_controllers;

router.get('', adminForwardAuthenticate, displayLogin);
router.post('', handleLogin);






router.get('/authorization', authorization);

router.get('/logout', logout);


module.exports = router;