$(function() {
	'use strict';

	//example of calling a jQuery plugin
	$('body').defaultPluginName();

	//example of using a handlebars template
	Handlebars.registerPartial('myPartial', MyApp.templates.myPartial);
	var template = MyApp.templates.helloWorld;
	var html = template({
		'title': 'Example of markup generated via js using handlebars',
		'subtitle': 'This text comes from a hbs partial!'
	});
	$('body > footer').before(html);
});
