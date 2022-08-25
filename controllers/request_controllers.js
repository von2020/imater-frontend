const  {request_queries} = require('../queries/index');
const {} = require('../utils/query_utils');
const {resMessageRedirect} = require('../utils/reusables');

const {
    allServices,
    viewService,
    allPosts,
    viewPosts,
    allPostsPag,
    handleContact,
}= request_queries;


class Requests {

    static async home (req, res) {
        
        
        
        try {
            const {result, resbody} = await allServices();
            const blogs = await allPosts();
            const posts = blogs.resbody
            console.log('posts', posts)
            const post = posts.slice(0,3)
            // const des = post.desc.slice(0,3)
            console.log('posts', posts)
            if (result.statusCode == '200') {
                const services = resbody.slice(0,6)
                console.log('services',services)
                res.render('home', {services, post})
            } else {
                console.log('Not getting services')
            }
            
                
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async view_services (req, res) {
        
        const id = req.query.id
        console.log('id', id)
        
        
        
        try {
            const {result, resbody} = await viewService(id);
            const materials = resbody;
            console.log('vServices', materials)
            
            res.render('viewServices', {materials});
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async about (req, res) {
        
        
        
        try {
            
            
                res.render('about');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async blog (req, res) {
        console.log('hereeeee')
        // const page = req.query.page;
        // const limit = req.query.limit;
        
        try {
            const {result, resbody} = await allPosts();
            
            if (result.statusCode == '200') {
                const posts = resbody
                console.log('posts',posts)
                res.render('blog', {posts})
            } else {
                console.log('Not getting posts')
            }
            
                // res.render('blog');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async blogPag (req, res) {
        console.log('hereeeee')
        const page = req.query.page;
        const limit = req.query.limit;
        
        try {
            const {result, resbody} = await allPostsPag(page, limit);
            
            if (result.statusCode == '200') {
                const posts = resbody
                console.log('posts',posts)
                return res.send(posts);
            } else {
                console.log('Not getting posts')
            }
            
                // res.render('blog');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async blog_single (req, res) {
        const id = req.query.id;
        console.log('id', id)
        try {
            const {result, resbody} = await viewPosts(id);
            const materials = resbody
            
            console.log('materials', materials)
            if (result.statusCode == 200) {
                res.render('blog_single', {materials});
            } else if (result.statusCode == 401){
                req.flash('error_msg', resbody.detail);
                res.redirect('/')
            
                // res.render('blog_single');
            } 
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async contact (req, res) {
        
        
        
        try {
            
                res.render('contact');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async handleContact (req, res) {
        
     
        const query = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
                    
        }

        console.log('query', query)
        
        try{
            
            const {result, resbody} = await handleContact(query);
            const response = resbody
            console.log("response", response)
            if (result.statusCode == '200') {
                res.send(" '<script> alert(' Message sent successfullty to immater '); </script>' " + "<script> window.location.href='/'; </script>");
            } else {
                res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/'; </script>");
            }
        } catch(err){
            if (err) console.log('error', err)
            res.send(" '<script> alert(' Network Error '); </script>' " + "<script> window.location.href='/'; </script>");
                return;
        }
            
    };

    static async services (req, res) {
        console.log('hereeeee')
        // const page = req.query.page;
        // const limit = req.query.limit;
        
        try {
            const {result, resbody} = await allServices();
            
            if (result.statusCode == '200') {
                const posts = resbody
                console.log('services', posts)
                res.render('services', {posts})
            } else { 
                console.log('Not getting services') 
            }
            
                // res.render('services');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };
}

module.exports = Requests