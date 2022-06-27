const  {request_queries} = require('../queries/index');
const {} = require('../utils/query_utils');


const {
    allServices,
    
}= request_queries;


class Requests {

    static async home (req, res) {
        
        
        
        try {
            const {result, resbody} = await allServices();
            if (result.statusCode == '200') {
                const services = resbody.slice(0,6)
                console.log('services',services)
                res.render('home', {services})
            } else {
                console.log('Not getting services')
            }
            
                // res.render('home');
            
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
        
        
        
        try {
            
                res.render('blog');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };

    static async blog_single (req, res) {
        
        
        
        try {
            
                res.render('blog_single');
            
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

    static async services (req, res) {
        
        
        
        try {
            
                res.render('services');
            
        }catch(err) {
            if (err) console.error('Error', err);
            res.send(" '<script> alert(' Network Error '); </script>' ");
                return;
        }

    };
}

module.exports = Requests