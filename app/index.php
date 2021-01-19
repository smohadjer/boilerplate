<!doctype html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8">
		<title>Boilerplate</title>
		<meta name="description" content="Boilerplate for responsvie Websites">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- build:css resources/css/styles.min.css -->
		<link rel="stylesheet" href=".tmp/resources/css/helper.css">
		<link rel="stylesheet" href=".tmp/resources/css/hamburgers.css">
		<link rel="stylesheet" href=".tmp/resources/css/styles.css">
		<!-- endbuild -->
	</head>
	<body>
		<?php include('content/html/header.html'); ?>
		<main>
			<?php include('content/html/index.html'); ?>
		</main>
		<?php include('content/html/footer.html'); ?>
		<script>
			var myApp = {};
		</script>
		<!-- build:js resources/js/bundle.js -->
		<script src=".tmp/resources/js/handlebars.runtime.js"></script>
		<script src=".tmp/resources/js/handlebars.templates.js"></script>
		<script type="module" src="resources/js/main.js"></script>
		<!-- endbuild -->
	</body>
</html>
