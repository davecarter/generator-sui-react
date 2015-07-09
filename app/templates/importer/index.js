var path = require('path');
var fs = require('fs');
var control = 0;
module.exports = function (url, file, done) {
  recursiveFind(url, file, done);
}

function recursiveFind(url, file, done){
  control ++;
  if (control == 10)
    return;

  fs.access(path.join(__dirname, '../src', url), fs.R_OK, function(err){
    if (err) {
      return recursiveFind(path.join('../', url), file, done);
    }
    done({ file: url });
  });
}
