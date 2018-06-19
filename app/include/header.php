<header>
	<a class="logo" href="index.php">Logo</a>

	<button class="hamburger hamburger--spin" type="button">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>
		<span class="hamburger-label">Menu</span>
	</button>

	<nav>
		<?php
			if ($navType == 'short') {
				include('include/nav-short.php');
			} else {
				include('include/nav-long.php');
			}
		?>
	</nav>
</header>
