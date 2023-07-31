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
    handlePost,
    blog_single,
    handlePostUpdate,
    delete_post,
    handleService,
    addServiceImage,
    delete_service,
    createService,
    
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
router.post('/createPost',adminCheckSession,  handlePost);
router.get('/edit_single',adminCheckSession,  blog_single);
router.post('/edit_single',adminCheckSession,  handlePostUpdate);
router.get('/delete_post',adminCheckSession,  delete_post);

router.get('/createService',adminCheckSession,  createService);
router.post('/uploadServiceImage',adminCheckSession,  addServiceImage);
router.post('/createService',adminCheckSession,  handleService);
router.get('/delete_service',adminCheckSession,  delete_service);

module.exports = router;