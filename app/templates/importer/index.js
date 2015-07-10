var path = require('path');
var fs = require('fs');

module.exports = function (url, file, done) {
  if(url.indexOf('@schibstedspain/') !== -1){
    done({ file: recursiveFind(url)});
  } else {
    return done({file: url});
  }
}

function recursiveFind(url){
  const urlTree = url.split(path.sep);
  urlTree.pop();
  const folder = path.join(__dirname, '../node_modules', urlTree.join(path.sep));

  if(!fs.existsSync(folder)) {
    return recursiveFind(path.join('../', url));
  } else {
    return url;
  }
}
