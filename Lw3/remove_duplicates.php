<?php
if ($argc <= 2)
{
    $result = "";
    $chars = str_split($argv[1]);
    foreach ($chars as $ch)
        if (strpos($result, $ch) === false)
            $result .= $ch;
    echo $result;
}
else
    echo "Incorrect number of arguments!\nUsage php remove_duplicates.php <input string>";
?>