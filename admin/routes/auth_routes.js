const express = require('express');
const router = express.Router();

//require the controllers from the controllers route
const { auth_controllers} = require('../controllers/index');

const {
    
} = auth_controllers;

module.exports = router;