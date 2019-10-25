var fs = require('fs');
var path = require('path');
var useref = require('useref');

function djoin(p) {
  return path.normalize(path.join(__dirname, p));
}

function fread(f) {
  return fs.readFileSync(f, { encoding: 'utf-8'});
}

var html = fread(djoin('../app/index.html'));
var result = useref(html);

console.log(result[1].js);

fs.writeFile("dist/index.html", result[0], function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
