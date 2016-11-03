<?
    header("Content-Type: text/plaine");
    $dictionary = array
	(
        "Keyboard" => "Клавиатура",
        "Word" => "Слово",
        "Name" => "Имя",
        "Dictionary" => "Словарь",
        "Elephant" => "Слон"
    );
    if (isset($_GET['word']) && ($_GET['word'] != ""))
    {
        if (key_exists($_GET['word'], $dictionary))
		{
            echo "Translate(EN-RU): ", $dictionary[$_GET['word']];
		}
        elseif (in_array($_GET['word'], $dictionary))
		{
            echo "Translate(RU-EN): ", array_search($_GET['word'], $dictionary);
		}
        else
        {
            header("HTTP/1.0 404");
            echo "The word is not found.";
        }
    }
    else
    {
        header("HTTP/1.0 400");
        echo "Argument \"word\" is not specified or is set incorrectly.";
    }
?>