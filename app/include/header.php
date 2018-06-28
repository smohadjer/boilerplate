<header>
	<?php
	if ($rtl) {
		echo '<a class="logo" href="index.php">لگو</a>';
	} else {
		echo '<a class="logo" href="index.php">Logo</a>';
	}
	?>

	<button class="hamburger hamburger--spin" type="button">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>

		<?php
		if ($rtl) {
			echo '<span class="hamburger-label">منو</span>';
		} else {
			echo '<span class="hamburger-label">Menu</span>';
		}
		?>
	</button>

	<nav data-set-max-height="true">
		<?php
		if ($rtl) {
			include('include/nav-rtl.php');		
		} else {
			include('include/nav.php');
		}
		?>
	</nav>
</header>
