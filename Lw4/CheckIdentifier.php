<?
	function checkChar($intChar)
	{
		$result = $intChar == 95 || ($intChar >= 65 && $intChar <= 90) ||
           		($intChar >= 97 && $intChar <= 122) || ($intChar >= 127);
		return $result;
	}

	$identifier = $_GET["identifier"];
	if (isset($identifier) && ($identifier != ""))
	{
		$errors = "";
		$identifier = str_split($identifier);
		$intChar = ord($identifier[0]);
		if (!checkChar($intChar))
		{
			$error .= "������������� ������ ���������� ������ � ������� ������������� ��� �����<br>";
		}
		for ($i = 1; $i < count($identifier); $i++)
		{
			$intChar = ord($identifier[$i]);
			if (!checkChar($intChar) && !($intChar >= 48 && $intChar <= 57))
			{
				$error .= "������������� ����� �������� ������ �� ������� �������������, ���� � ����";
				break;
			}
		}		
		if ($error == "")
		{
			print("Yes");
		}
		else
		{
			print("No<br>".$error);
		}
	}
	else
	{
		header("HTTP/1.0 400");
		echo "Argument \"identifier\" is not specified or is empty.";
	}
?>