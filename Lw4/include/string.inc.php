<?
	function withoutLast($str)
	{
		return substr_replace($str, "", -1);
	}
	
	function last($str)
	{
		return $str{strlen($str) - 1};
	}
	
	function reverse($str)
	{
		$resultStr = "";
		for ($i = strlen($str) - 1; $i >= 0; $i--)
		{
			$resultStr .= $str{$i};
		}
		return $resultStr;
	}