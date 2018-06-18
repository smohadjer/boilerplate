<header>
	<nav>
		<ul>
			<li><?php if ($pageId == 'home') {echo 'Home';} else {echo '<a href="index.php">Home</a>';}?></li>
			<li><?php if ($pageId == 'about') {echo 'About';} else {echo '<a href="javascript:void(0);">About</a>';}?></li>
			<li><?php if ($pageId == 'contact') {echo 'Contact';} else {echo '<a href="javascript:void(0);">Contact</a>';}?></li>
		</ul>
	</nav>
</header>
