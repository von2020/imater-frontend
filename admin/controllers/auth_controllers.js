const express = require('express');
const router = express.Router();
const validateLogin = require('../../validation/loginSchema');
// requrie the query from the query modules
const {auth_queries} = require('../queries');

const {admin_manage_queries} = require('../queries');
const {
    loginRequest,
    
} = auth_queries;

const {
    getUsers,
    getPosts,
    getServices,
    getMessages,

} = admin_manage_queries;

class auth_controllers {

    static async displayLogin (req, res) {
        res.render('admin/login');
    };

    static async handleLogin (req, res) {
        
        // const {error, value} = validateLogin(req.body);

        // if (error) {
        //     req.flash('error_msg', 'This email does not match the standard email format')
        //     res.redirect('/admin')
        //     return console.error('login error', error)
        // } 
        
        const query = {
            username: req.body.username,
            password: req.body.password
        }
        console.log('query', query)
        try{
            const {result, resbody} = await loginRequest(query)
            // const response = resbody
            console.log('resbody',resbody)

            
            if (result.statusCode == '200' && resbody.isAdmin == true) {
                req.session.userDetails = resbody
                res.send( "<script> window.location.href='/admin/manage/dashboard'; </script>")
                return
            } else if (result.statusCode == '200' && resbody.isAdmin == false) {
                res.send(" '<script> alert(' You are not an admin '); </script>' " + "<script> window.location.href='/admin'; </script>");
                return 
            }else{
                res.send(" '<script> alert(' Wrong Login Details '); </script>' " + "<script> window.location.href='/admin'; </script>");
                return
            }
            
            
            
        }
        catch(err) {
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/admin'; </script>");
                return;
        }
    }

    

    // static async generalReport (req, res) {
    //     var userDetails = req.session.userDetails
    //     res.render('admin/admin_dashboard', {userDetails}) 
    //     };

    

    static async authorization (req, res) {
        var userDetails = req.session.userDetails
        return res.render('authorization', {userDetails})
    }

    static async logout (req, res) {
        req.session.destroy(function(err) {
            if (err) return console.log('error',err)
          });
          res.redirect('/admin')
    }
    

}

module.exports = auth_controllers