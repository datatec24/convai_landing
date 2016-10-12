// 'use strict';

commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'avancement', alias: 'a', type: String, defaultValue: "dev" },
];

const options = commandLineArgs(optionDefinitions);

//console.log('\n options ', options)

if (options.avancement=='dev'){
// Ngrok DEVELOPPEMENT
var config = {};

config.SERVER_URL = "https://6779615e.ngrok.io";
config.port = 8888;


}

else if (options.avancement=='prod'){
//HEROKU PRODUCTION

var config = {};

config.SERVER_URL = "https://blablabotlanding.herokuapp.com";

}

else{
    console.log("Error config")
}

module.exports = config;
