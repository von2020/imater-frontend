const express = require('express');
const config = require('config')
const app = express();
const path = require('path')
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require('connect-flash');

const cloudinary = require('cloudinary').v2

var fileUpload = require('express-fileupload');

app.use(fileUpload({
  useTempFiles: true
}));


cloudinary.config({
  cloud_name: 'dxzrwvflo',
  api_key: '248583444414373',
  api_secret: 'C1i08PVkjl0ht6vRxGXvq5GeUoc'
})




const routes = require('./routes/index');
const admin_routes = require('./admin/routes/index');
const test = require('./test');

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname) + "/public"));

app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

app.use(express.json({limit: "50mb"}))





app.use(session({
  secret: 'shhh',
  resave: true, 
  saveUninitialized: true,
  cookie: { maxAge: 24*60*60*1000 },
}));

// Connect flash
app.use(flash());


// Global variables for connect flash
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.errors = req.flash('errors');
  next();
});

// All the routes.
app.use('/', routes);
app.use('/admin', admin_routes);


app.get("/", (req, res) => {
    res.status(200).send({message: "Welcome to Immater"});
})
//Defining the environment variable and server

var port = process.env.PORT || 4000;


const server  = app.listen(port, function() {
    const host = server.address().address; // CB i tried to log this server object and could not find this adress method,.. I think this worlds because it is an asynchronous funciton
    const port = server.address().port // CB how can you change this.
    console.log("Server listening on http://%s:%s", host, port)
});
