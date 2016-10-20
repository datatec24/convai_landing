
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var api = require('./routes/api');

// 
// // Use native Node promises
// mongoose.Promise = global.Promise;
//
// app.set('mongodb_uri',(process.env.MONGODB_URI || 'mongodb://localhost/landingpage'))
// // connect to MongoDB
// mongoose.connect(app.get('mongodb_uri'))
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/ok', function(req,res){
    console.log('ok')
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
