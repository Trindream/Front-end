<?
    function checkIdentifier($arrOfChar)
	{
		$errors = "";

		if (!ctype_alpha($arrOfChar[0]))
		{
			$errors .= "Идентификатор должен начинаться с буквы<br>";
		}
		
		for ($i = 1; $i < count($arrOfChar); $i++)
		{
			if (!is_numeric($arrOfChar[$i]) && !ctype_alpha($arrOfChar[$i]))
			{
				$errors .= "Идентификатор может состоять только из цифр и букв";
				break;
			}
		}
		return $errors;
	}
	
	function showResult($errors)
	{
		if (empty($errors))
		{
			print("Yes");
		}
		else
		{
			print("No<br>" . $errors);
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