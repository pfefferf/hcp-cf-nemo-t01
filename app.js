'use strict';

let express = require('express');
let bodyParser = require('body-parser');

// create express instance
let oApp = express();

// body parser middleware to handle URL parameter and JSON bodies
oApp.use(bodyParser.urlencoded({extended: false}));
oApp.use(bodyParser.json());

// express app listener
let port = process.env.PORT || 3000;

oApp.listen(port, function(){
    console.log('Server listening at ' + port);
});
