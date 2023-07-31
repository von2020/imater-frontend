class Authorize {

    static adminAuthorize (req, res, next) {
        if (req.session.userDetails.isAdmin == true) {
            return next()
        } else {
            return res.render('authorization')
        };

    };

    

};

module.exports = Authorize