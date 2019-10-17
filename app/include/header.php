<header>
	<a class="logo" href="index.php">Logo</a>
	<button class="hamburger hamburger--spin" type="button">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>
		<span class="hamburger-label">Menu</span>
	</button>
	<nav data-set-max-height="true">
		<ul>
		    <li><?php if ($pageId == 'home') {echo 'Home';} else {echo '<a href="index.php">Home</a>';}?></li>
		    <li><?php if ($pageId == 'two-columns') {echo 'Two Columns';} else {echo '<a href="two-columns.php">Two Columns</a>';}?></li>
		    <li><a href="javascript:void(0);">Lorem ipsum</a></li>
		    <li><a href="javascript:void(0);">Consectetur</a></li>
		    <li><a href="javascript:void(0);">Duis aute</a></li>
		    <li><a href="javascript:void(0);">Proident</a></li>
		    <li><a href="javascript:void(0);">Last item in navigation</a></li>
		</ul>
	</nav>
</header>
