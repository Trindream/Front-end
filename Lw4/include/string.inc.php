<?php
	function WithoutLast($str)
	{
		return substr_replace($str, "", -1);
	}
	
	function Last($str)
	{
		return $str{strlen($str) - 1};
	}
	
	function Reverse($str)
	{
		$resultStr = "";
		for ($i = strlen($str) - 1; $i >= 0; $i--)
		{
			$resultStr .= $str{$i};
		}
		return $resultStr;
	}
?>