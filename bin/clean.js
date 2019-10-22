var fs = require('fs');
var rimraf = require('rimraf');

rimraf.sync('.tmp');

fs.mkdir('.tmp/resources/css/vendor', { recursive: true }, (err) => {
	if (err) throw err;
});

fs.mkdir('.tmp/resources/js/vendor', { recursive: true }, (err) => {
	if (err) throw err;
});
