var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

rollup({
	entry: '/app/resources/js/main.js',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	],
	output: {
		file: '.tmp/bundle.js',
		format: 'iife'
	}
})
