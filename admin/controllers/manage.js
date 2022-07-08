const express = require('express');
const router = express.Router();
const validateLogin = require('../../validation/loginSchema');
// requrie the query from the query modules
const {auth_queries} = require('../queries');

const {admin_manage_queries} = require('../queries');


const {
    getUsers,
    getPosts,
    getServices,
    getMessages,
    viewService,
    viewPost,
    viewSubscriber,
    addPostImage,
    addService,
    addPost

} = admin_manage_queries;

class Requests {

    static async displayDashboard (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('token', token)
        console.log('userDetails', userDetails)

        try{
            const {result, resbody} = await getUsers(token);
            // const use = resbody
            // console.log('users', use)

            const allUsers = resbody.length;
            const Posts = await getPosts(token);
            const allPosts = Posts.resbody
            const postLength = allPosts.length
            console.log('posts', postLength)

            const Services = await getServices(token);
            const allServices = Services.resbody
            const serviceLength = allServices.length
            console.log('services', serviceLength)

            const Messages = await getMessages(token);
            const allMessages = Messages.resbody
            const messageLength = allMessages.length
            console.log('messages', messageLength)

        return  res.render('admin/dashboard', {userDetails, allUsers, postLength, serviceLength, messageLength}) 
    
        }catch(err){
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin'; </script>");
                return;
        }
    };

    static async admin_services (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await getServices(token);
            const allServices = resbody;
            console.log('allServices', allServices)
            
            res.render('admin/allServices', {userDetails, allServices});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async view_services (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id
        console.log('id', id)
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await viewService(id,token);
            const vServices = resbody;
            console.log('vServices', vServices)
            
            res.render('admin/viewServices', {userDetails, vServices});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };
   

    static async admin_posts (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await getPosts(token);
            const allPosts = resbody;
            console.log('allPosts', allPosts)
            res.render('admin/allPosts', {userDetails, allPosts});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async view_post (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id
        console.log('id', id)
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await viewPost(id,token);
            const vPost = resbody;
            console.log('vPost', vPost)
            
            res.render('admin/viewPost', {userDetails, vPost});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async admin_messages (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('token', token)
        console.log('userDetails', userDetails)
         
        try {
            const {result, resbody} = await getMessages(token);
            const allMessages = resbody;
            console.log('allMessages', allMessages)
                res.render('admin/allMessages', {userDetails, allMessages});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async view_message (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id
        console.log('id', id)
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await viewSubscriber(id,token);
            const vMessage = resbody;
            console.log('vMessage', vMessage)
            
            res.render('admin/viewMessage', {userDetails, vMessage});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async createPost (req, res) {
        
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        
        
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        try {
            
                res.render('admin/createPost', {userDetails});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async addPostImage (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('files', req.files)
        if (req.files) {
        
            const data = req.files.file;
            
            console.log('file', data)
            
              try {
                const subs = await addPostImage(data,token);
                res.json( subs.resbody);
            } catch (err) {
                if (err) console.log('error', err)
                
                res.status(503).json(err);
                return;
            }
            
        }

    };

    

    static async createService (req, res) {
        
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        try {
            
                res.render('admin/addService', {userDetails});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async admin_profile (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        try {
            
            res.render('admin/profile', {userDetails});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    
}

module.exports = Requests