const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//middleware
// const middleware = require('')

//loading the module into the folder.
const requests = require('./requests');

// const manage = require('./manage');
// const reports = require('./reports');

//middleware route
// router.use(middleware)

// the routers for this function
// router.use('/requests', requests);

router.use('/', requests);
// router.use('/reports', reports);

// 
module.exports = router;