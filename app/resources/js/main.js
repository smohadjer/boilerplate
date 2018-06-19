(function() {
	'use strict';

	//taken from http://youmightnotneedjquery.com/
	function ready(fn) {
		if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	ready(function() {
		console.log('DOM is ready!');

		//example of using a handlebars template
		Handlebars.registerPartial('myPartial', myApp.templates.myPartial);

		//hamburger button
		const hamburger = document.querySelector('button.hamburger');
		if (hamburger) {
			hamburger.addEventListener('click', function() {
				hamburger.classList.toggle('is-active');
			});
		}

		var template = myApp.templates.helloWorld;
		var html = template({
			'title': 'Example of markup generated via js using handlebars',
			'subtitle': 'This text comes from a hbs partial!'
		});

		document.querySelector('body > footer').insertAdjacentHTML('beforebegin', html);
	});
})();
