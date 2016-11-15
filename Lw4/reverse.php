<?
	require "include/common.inc.php";
	
	if (!empty($_GET["str"]))
		print(reverse($_GET["str"]));
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"str\" is not specified or is empty";
	}