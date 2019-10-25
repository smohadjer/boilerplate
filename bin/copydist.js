var fs = require("fs-extra");
var concat = require("concat");

fs.mkdir('dist/resources/css', { recursive: true }, (err) => {
	if (err) throw err;
});

fs.mkdir('dist/resources/js', { recursive: true }, (err) => {
	if (err) throw err;
});

concat(['.tmp/resources/css/vendor/hamburgers.css', '.tmp/resources/css/vendor/helper.css', '.tmp/resources/css/styles.css'], 'dist/resources/css/styles.min.css');

concat(['.tmp/resources/js/main.es5.js', '.tmp/resources/js/vendor/handlebars.runtime.js', '.tmp/resources/js/handlebars.templates.js'], 'dist/resources/js/bundle.js');

// copy source folder to destination
/*
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
*/

fs.copy('app/assets', 'dist/assets', function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
