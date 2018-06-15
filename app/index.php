
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Boilerplate for small PHP Websites</title>
		<meta name="description" content="Boilerplate for small PHP Websites">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="apple-touch-icon.png">

		<!-- build:css({.tmp,app}) resources/css/styles.min.css -->
		<link rel="stylesheet" href="../.tmp/resources/vendor/helpers/dist/helper.css">
		<link rel="stylesheet" href="../.tmp/resources/css/styles.css">
		<!-- endbuild -->
	</head>
	<body>
		<?php include('includes/nav.html'); ?>
		<?php include('includes/content.html'); ?>

		<!-- build:js({.tmp,app}) resources/js/scripts.min.js -->
		<script src="../.tmp/resources/vendor/jquery/dist/jquery.js"></script>
		<script src="../.tmp/resources/vendor/handlebars/dist/handlebars.js"></script>
		<script src="../.tmp/resources/js/handlebars.templates.js"></script>
		<script src="resources/js/jquery.boilerplate.js"></script>
		<script src="resources/js/main.js"></script>
		<!-- endbuild -->
	</body>
</html>
