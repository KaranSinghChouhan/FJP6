const request = require('request');

request('http://www.google.com', cb);

function cb(error, response, body) {
    if (error) {
        console.log('error: ', error);//prints the error if one occured
    } else {
        console.log('body: ', body);//prints the html for the google homepage
    }
}