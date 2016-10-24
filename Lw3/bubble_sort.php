<?php
if ($_GET['numbers'] == NULL)
{
    header("HTTP/1.0 400");
    echo "Argument \"numbers\" is not specified or is set incorrectly.";
    exit;
}
$arr = explode(",", $_GET['numbers']);
foreach ($arr as $number)
    if (!is_numeric($number))
    {
        header("HTTP/1.0 400");
        echo "Argument \"numbers\" is not specified or is set incorrectly.";
        exit;
    }
$len = count($arr) - 1;
for ($i = 0; $i < $len; $i++)
{
    $flag = true;
    for ($j = 0; $j < $len - $i; $j++)
        if ($arr[$j] > $arr[$j + 1])
        {
            $flag = false;
            $temp = $arr[$j];
            $arr[$j] = $arr[$j + 1];
            $arr[$j + 1] = $temp;
        }
    if ($flag) break;
}
header("Content-Type: text/pline");
print(implode(",", $arr));
?>