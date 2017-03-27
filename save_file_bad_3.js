var request = require('request-promise');
var fs = require('fs');

var filename = 'amjad.html';
request.get('https://amasad.me/')
  .then(function(html) {
    var contents = html.toUpperCase();
    return fs.writeFile(filename, contents);
  })
  .then(function() {
    console.log('Wrote file ' + filename);
  })
  .catch(function(err) {
    console.log('Something went wrong');
    console.log(err.message);
  });
