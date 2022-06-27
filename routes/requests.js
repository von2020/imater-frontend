const express = require('express');
const router = express.Router();
const {request_controllers} = require('../controllers/index')
// const {} = require('../utils/query_util');

//store the list of the queries
const {
    home,
    about,
    blog,
    blog_single,
    contact,
    services,
} = request_controllers;

router.get('/',  home),
router.get('/about_us',  about),
router.get('/blog',  blog),
router.get('/blog_single',  blog_single),
router.get('/contact_us',  contact),
router.get('/our_services',  services)


module.exports = router;
