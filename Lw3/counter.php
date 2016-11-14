<?
    if (($_GET['string'] == NULL) || ($_GET['string'] == ""))
    {
        header("HTTP/1.0 400");
        echo "Argument \"string\" is not specified or is set incorrectly.";
        exit;
    }
    header("Content-Type: text/plain");
    $string = str_split(strtolower($_GET['string']));
    $list = array();
    foreach ($string as $char)
    {
        if (key_exists($char, $list))
        {
			$list[$char]++;
		}
        else
        {
			$list[$char] = 1;
		}
    }
    $space = 0;
    foreach ($list as $char => $number)
    {
        if ($char == " ")
        {
			$space = $number;
		}
        else
        {
			print($char." - ".$number."\n");
		}
    }
    if ($space != 0)
	{
		print("\" \"(пробел) - ".$space);
	}