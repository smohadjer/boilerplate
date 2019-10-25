var fs = require("fs-extra");
var path = require('path');

var content = fs.readFileSync("projectConfig.json");
var jsonContent = JSON.parse(content);

//copies css dependencies
function copyDependencies(type) {
	jsonContent.dependencies[type].forEach(function(source) {
		var filename = path.basename(source);
		var destination = `.tmp/resources/${type}/vendor/${filename}`;
		console.log(source, destination);

		fs.copy(source, destination, function (err) {
		    if (err){
		        console.log('An error occured while copying the folder.')
		        return console.error(err)
		    }
		    console.log('Copy completed!')
		});
	});
}

copyDependencies('css');
copyDependencies('js');

fs.copy('app/assets', 'dist/assets', function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
