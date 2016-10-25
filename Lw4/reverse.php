<?php
	require "include/common.inc.php";
	
	if (isset($_GET["str"]))
		print(Reverse($_GET["str"]));
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"str\" is not specified.";
	}
?>