const express = require('express');
const cloudinary = require('cloudinary').v2
const app = express();
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles: true
}));

cloudinary.config({
    cloud_name: 'dxzrwvflo',
    api_key: '248583444414373',
    api_secret: 'C1i08PVkjl0ht6vRxGXvq5GeUoc'
})
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
    updatePost,
    viewSubscriber,
    addPostImage,
    addService,
    deleteService,
    deletePost,
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

    static async delete_post (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id
        console.log('id', id)
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await deletePost(id,token);
            const vPost = resbody;
            console.log('vPost', vPost)
            
            res.send(" '<script> alert(' Service Deleted Successfullt '); </script>' " + "<script> window.location.href='/admin/manage/service_posts'; </script>");
            
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
        // const token = userDetails.accessToken
        console.log('files', req.files)
    
    try{
        
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
          }
        const file = req.files.file;
        console.log('file', file)
        console.log('heyyyy',file.tempFilePath )
        cloudinary.uploader.upload(file.tempFilePath, function(err, result){
            console.log('error', err)
            console.log('result', result)
            res.send({
                success: true,
                result
            })
        });
        
         
    } catch (err){
        res.status(500).json(err); 
    }


    };

    static async handlePost (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
     
        const query = {
            title: req.body.title,
            desc: req.body.description,
            img: req.body.image,
            categories: req.body.categories,
                    
        }

        console.log('query', query)
        
        try{
            
            const {result, resbody} = await addPost(query, token);
            const response = resbody
            console.log("response", response)
            if (result.statusCode == '200') {
                res.send(" '<script> alert(' Update Added Successfully '); </script>' " + "<script> window.location.href='/admin/manage/posts'; </script>");
            } else {
                res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/createPost'; </script>");
            }
        } catch(err){
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/createPost'; </script>");
                return;
        }
            
    }; 

    static async blog_single (req, res) {
    var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id;
        console.log('id', id)
        try {
            const {result, resbody} = await viewPost(id);
            const materials = resbody
            
            console.log('materials', materials)
            if (result.statusCode == 200) {
                res.render('admin/addService', {materials, userDetails, id});
            } else if (result.statusCode == 401){
                req.flash('error_msg', resbody.detail);
                res.redirect('/admin/dashboard')
            
                // res.render('blog_single');
            } 
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async handlePostUpdate (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.body.id
     
        const query = {
            title: req.body.title,
            desc: req.body.description,
            img: req.body.image,
            categories: req.body.categories,
                    
        }

        console.log('query', query)
        
        try{
            
            const {result, resbody} = await updatePost(id, query, token);
            const response = resbody
            console.log("response", response)
            if (result.statusCode == '200') {
                res.send(" '<script> alert(' Service Updated Successfully '); </script>' " + "<script> window.location.href='/admin/manage/service_posts'; </script>");
            } else {
                res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/blog_single'; </script>");
            }
        } catch(err){
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/blog_single'; </script>");
                return;
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

    static async addServiceImage (req, res) {
        var userDetails = req.session.userDetails
        // const token = userDetails.accessToken
        console.log('files', req.files)
    
    try{
        
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
          }
        const file = req.files.file;
        console.log('file', file)
        console.log('heyyyy',file.tempFilePath )
        cloudinary.uploader.upload(file.tempFilePath, function(err, result){
            console.log('error', err)
            console.log('result', result)
            res.send({
                success: true,
                result
            })
        });
        
         
    } catch (err){
        res.status(500).json(err); 
    }


    };

    static async handleService (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
     
        const query = {
            title: req.body.title,
            desc: req.body.description,
            img: req.body.image,
            categories: req.body.categories,
                    
        }

        console.log('query', query)
        
        try{
            
            const {result, resbody} = await addService(query, token);
            const response = resbody
            console.log("response", response)
            if (result.statusCode == '200') {
                res.send(" '<script> alert(' Service Uploaded Successfullt '); </script>' " + "<script> window.location.href='/admin/manage/services'; </script>");
            } else {
                res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/createService'; </script>");
            }
        } catch(err){
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin/manage/createService'; </script>");
                return;
        }
            
    }; 

    static async delete_service (req, res) {
        var userDetails = req.session.userDetails
        const token = userDetails.accessToken
        const id = req.query.id
        console.log('id', id)
        console.log('token', token)
        console.log('userDetails', userDetails)
        
        
        try {
            const {result, resbody} = await deleteService(id,token);
            const vPost = resbody;
            console.log('vPost', vPost)
            
            res.send(" '<script> alert(' Service Deleted Successfullt '); </script>' " + "<script> window.location.href='/admin/manage/services'; </script>");
            
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