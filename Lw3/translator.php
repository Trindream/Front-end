<?php
header("Content-Type: text/plaine");
$dictionary = array(
    "Keyboard" => "Клавиатура",
    "Word" => "Слово",
    "Name" => "Имя",
    "Dictionary" => "Словарь",
    "Elephant" => "Слон"
);
if ($_GET['word'] != NULL)
{
    if (key_exists($_GET['word'], $dictionary))
        echo "Translate(EN-RU): ", $dictionary[$_GET['word']];
    elseif (in_array(iconv("UTF-8", "cp1251", $_GET['word']), $dictionary))
        echo "Translate(RU-EN): ", array_search(iconv("UTF-8", "cp1251", $_GET['word']), $dictionary);
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