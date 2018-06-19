<header>
	<a class="logo" href="index.php">Logo</a>
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
