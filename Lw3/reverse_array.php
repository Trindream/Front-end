<?php
if ($_GET['arr'] == NULL)
{
    header("HTTP/1.0 400");
    echo "Argument \"arr\" is not specified or is set incorrectly.";
    exit;
}
header("Content-Type: text/pline");
$arr = explode(",", $_GET['arr']);
$len = count($arr) - 1;
for ($i = 0; $i <= $len / 2; $i++)
{
    $temp = $arr[$i];
    $arr[$i] = $arr[$len - $i];
    $arr[$len - $i] = $temp;
}
print("arr:");
foreach($arr as $value)
    print(" ".$value);
?>