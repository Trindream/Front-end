<?php
	function CheckChar($intChar)
	{
		return $intChar == 95 || ($intChar >= 65 && $intChar <= 90) || ($intChar >= 97 && $intChar <= 122) || ($intChar >= 127);
	}

	$identifier = $_GET["identifier"];
	if (isset($identifier) && $identifier != "")
	{
		$errors = "";
		$identifier = str_split($identifier);
		$intChar = ord($identifier[0]);
		if (!CheckChar($intChar))
			$error .= "Идентификатор должен начинаться только с символа подчеркивания или буквы<br>";
		for ($i = 1; $i < count($identifier); $i++)
		{
			$intChar = ord($identifier[$i]);
			if (!CheckChar($intChar) && !($intChar >= 48 && $intChar <= 57))
			{
				$error .= "Идентификатор может состоять только из символа подчеркивания, цифр и букв";
				break;
			}
		}
				
		if ($error == "")
			print("Yes");
		else
			print("No<br>".$error);
	}
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"identifier\" is not specified or is empty.";
	}
?>