<!DOCTYPE html>
<html>
<head>
    <title>Shivion's Random Stuff</title>
	<!--Boot Strap-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!--Theme-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	<!--My CSS-->
    <link rel="stylesheet" type="text/css" href="Assets/main.css">
</head>
<body>
	<?php
	$headerPath = "Assets/header.php";
	if(file_exists($headerPath)){
		require_once($headerPath);
	}
	?>
	<div class="body">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<h1>Things</h1>
				<ul>
					<li><a href="MyraniumDnDTimer">D&D Timer</a></li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>