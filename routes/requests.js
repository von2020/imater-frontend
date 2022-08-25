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
    blogPag,
    handleContact,
    view_services
} = request_controllers;

router.get('/',  home),
router.get('/about_us',  about),
router.get('/blog',  blog),
router.get('/blog_single',  blog_single),
router.get('/service_single',  view_services),
router.get('/contact_us',  contact),
router.post('/contact_us',  handleContact)
router.get('/our_services',  services),
router.get('/blogPag',  blogPag),



module.exports = router;
