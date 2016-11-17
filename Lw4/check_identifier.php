<?
    $ERR1 = 1;
    $ERR2 = 2;
	
    function checkIdentifier($arrOfChar)
	{
		global $ERR1, $ERR2;
		$error = 0;

		if (!ctype_alpha($arrOfChar[0]))
		{
			$error += $ERR1;
		}
		
		for ($i = 1; $i < count($arrOfChar); $i++)
		{
			if (!is_numeric($arrOfChar[$i]) && !ctype_alpha($arrOfChar[$i]))
			{
				$error += $ERR2;
				break;
			}
		}
		return $error;
	}
	
	function showResult($error)
	{
		global $ERR1, $ERR2;
		if (!$error)
		{
			print("Yes");
		}
		else
		{
			print("No<br>");
			if ($error == $ERR1)
			{
				print("Идентификатор должен начинаться с буквы.");
			}
			else if ($error == $ERR2)
			{
				print("Идентификатор может состоять только из цифр и букв.");
			}
			else
			{
				print("Идентификатор должен начинаться с буквы, и состоять из цифр и букв.");
			}
		}
	}
	
	
    $identifier = $_GET["identifier"];
	if (!empty($identifier))
	{
		$identifier = str_split($identifier);
		showResult(checkIdentifier($identifier));
	}
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"identifier\" is not specified or is empty.";
	}
