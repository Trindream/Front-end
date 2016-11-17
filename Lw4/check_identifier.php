<?
    define(FIRST_SYMBOL_ERROR, 1);
    define(OTHER_SYMBOL_ERROR, 2);
    define(DOUBLE_ERROR, 3);
	
    function checkIdentifier($arrOfChar)
	{
		$error = 0;

		if (!ctype_alpha($arrOfChar[0]))
		{
			$error = FIRST_SYMBOL_ERROR;
		}
		
		for ($i = 1; $i < count($arrOfChar); $i++)
		{
			if (!is_numeric($arrOfChar[$i]) && !ctype_alpha($arrOfChar[$i]))
			{
				if ($error)
				{
				    $error = DOUBLE_ERROR;
				}
				else
				{
				    $error = OTHER_SYMBOL_ERROR;
				}
				break;
			}
		}
		return $error;
	}
	
	function showResult($error)
	{
		if (!$error)
		{
			print("Yes");
		}
		else
		{
			print("No<br>");
			if ($error == FIRST_SYMBOL_ERROR)
			{
				print("Идентификатор должен начинаться с буквы.");
			}
			else if ($error == OTHER_SYMBOL_ERROR)
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
