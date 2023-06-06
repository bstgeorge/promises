/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
//var readline = require('readline');
//const http = require('http');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, callback) => {
  // TODO
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      callback(err);
    } else {
      let lineArray = content.split('\n');
      callback(null, lineArray[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  // TODO
  request.get(url, (err, response) => {
    //console.log(response.statusCode);
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
