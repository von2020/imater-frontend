class Requests {

    static async home (req, res) {
        
        
        
        try {
            
                res.render('home');
            
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