<?
	require "include/common.inc.php";
	
	if (isset($_GET["str"]) && ($_GET["str"] != ""))
	{
		print(Last($_GET["str"]));
	}
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"str\" is not specified or is empty.";
	}
?>