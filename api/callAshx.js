const request = require('request');

let callAshx = () => {
    request('https://xxxx.xxxx.xxxx.xx/gao/system/repair/service/Unit.ashx', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
};

module.exports=callAshx;

