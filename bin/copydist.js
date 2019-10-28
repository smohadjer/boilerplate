var fs = require("fs-extra");
var concat = require("concat");

fs.mkdir('dist/resources/css', { recursive: true }, (err) => {
	if (err) throw err;
});

fs.mkdir('dist/resources/js', { recursive: true }, (err) => {
	if (err) throw err;
});

concat('.tmp/resources/css', 'dist/resources/css/styles.min.css');
concat('.tmp/resources/js', 'dist/resources/js/bundle.js');

fs.copy('app/assets', 'dist/assets', function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
