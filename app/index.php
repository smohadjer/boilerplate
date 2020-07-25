<!doctype html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8">
		<title>Boilerplate for responsive Websites</title>
		<meta name="description" content="Boilerplate for responsvie Websites">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- build:css resources/css/styles.min.css -->
		<link rel="stylesheet" href="../.tmp/resources/css/helper.css">
		<link rel="stylesheet" href="../.tmp/resources/css/hamburgers.css">
		<link rel="stylesheet" href="../.tmp/resources/css/styles.css">
		<!-- endbuild -->
	</head>
	<body>
		<header>
			<a class="logo" href="javascript:void(0);">Logo</a>
			<button class="hamburger hamburger--spin" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
				<span class="hamburger-label">Menu</span>
			</button>
			<nav data-set-max-height="true">
				<ul>
				    <li><a href="javascript:void(0);">Home</a></li>
				    <li><a href="javascript:void(0);">Lorem ipsum</a></li>
				    <li><a href="javascript:void(0);">Consectetur</a></li>
				    <li><a href="javascript:void(0);">Duis aute</a></li>
				    <li><a href="javascript:void(0);">Proident</a></li>
				    <li><a href="javascript:void(0);">Last item in navigation</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<?php include('content/html/index.html'); ?>
		</main>
		<footer>Copyright 2020</footer>
		<script>
			var myApp = {};
		</script>
		<!-- build:js resources/js/bundle.js -->
		<script src="../.tmp/resources/js/handlebars.runtime.js"></script>
		<script src="../.tmp/resources/js/handlebars.templates.js"></script>
		<script type="module" src="resources/js/main.js"></script>
		<!-- endbuild -->
	</body>
</html>
