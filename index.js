/**
 * Created by Max on 10/10/2016
 *
 *
 **/

const
    config = require('./config'),
    express = require('express'),
    request = require('request'),
    path = require('path'),
    fs = require('fs'),
    // Use morgan to print logs
    morgan  = require('morgan'),
    bodyParser = require('body-parser');

var application = express();



application.use(morgan('combined'));
application.use( bodyParser.json());       // to support JSON-encoded bodies
application.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
application.engine('html', require('ejs').renderFile);
application.set('view engine', 'html');



process.env.PWD = process.cwd();


application.get('/', function(req, res){
    fs.access(process.env.PWD + "/public/"+"index.html",function(err,res){
        if (err){
            console.log("err",err);
        }
        else{
            console.log("ok",res);
        }
    })
    console.log('on est dans le get');
    console.log(process.env.PWD + "/public");
    res.sendFile('index.html', { root: process.env.PWD + "/public" } );
});


application.use(express.static(process.env.PWD + '/public'));


// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
application.listen(process.env.PORT || config.port, function () {
    console.log(process.cwd());
    console.log('Example application listening on port ',process.env.PORT ||config.port);
});

// module.exports = app;
