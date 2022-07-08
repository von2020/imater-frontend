const express = require('express');
const router = express.Router();
const { adminForwardAuthenticate, adminCheckSession} = require('../../middlewares/checksession');

//require the controllers from the controllers route
const { admin_manage_controllers } = require('../controllers/index');

const {
    displayDashboard,
    admin_messages,
    admin_posts,
    admin_services,
    admin_profile,
    view_services,
    view_post,
    view_message,
    createPost,
    addPostImage,
    createService
} = admin_manage_controllers;



router.get('/dashboard',adminCheckSession, displayDashboard);
router.get('/messages',adminCheckSession, admin_messages);
router.get('/posts',adminCheckSession, admin_posts);
router.get('/services',adminCheckSession, admin_services);
router.get('/admin_profile',adminCheckSession, admin_profile);
router.get('/view_service',adminCheckSession,  view_services);
router.get('/view_post',adminCheckSession,  view_post);
router.get('/view_message',adminCheckSession,  view_message);

router.get('/createPost',adminCheckSession,  createPost);
router.post('/uploadPostImage',adminCheckSession,  addPostImage);

router.get('/createService',adminCheckSession,  createService);


module.exports = router;