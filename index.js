const express = require('express');        // require express module
const app = express();                     // create a instance of express
const bodyParser = require('body-parser');
const port = 5000; 
const customerAPI= require('./Customer/getUserInRangeAPI');

app.use(bodyParser.urlencoded(
    {
        extended: false,
        limit: "1mb"
    }
));

// Get User API for fetching users within 100Km range 
app.get('/getUserWithInRange',customerAPI.getUserWithInRange);

  // Initialize Listener
  app.listen(port, (err) => {
    if (err) {
        console.log('Response Error');
    }
    else {
        console.log('Response Success, server running at ' + port);
    }

});