<?php
header("Content-Type: text/pline");
//a)
$a = array();
$n = 2;
echo "a:\n";
while (count($a) < 10)
{
    $flag = true;
    for ($i = 2; $i <= $n / 2; $i++)
        if ($n % $i == 0) $flag = false;
    if ($flag)
    {
        $a[] = $n;
        echo $n, " ";
    }
    $n++;
}
//b)
$b = array(
    "count" => "������������ ���������� ��������� ������� ��� ���-�� � �������",
    "is_array" => "����������, �������� �� ���������� ��������",
    "array_merge" => "������� ���� ��� ������� ���������� ��������",
    "empty" => "���������, ����� �� ����������",
    "print_r" => "������� ������������� ���������� � ����������"
);
echo "\n\nb:\n";
foreach ($b as $name => $value)
    echo $name, " - ", $value, "\n";
//c)
$c = array();
echo "\nc:\n";
for ($i = 0; $i < 4; $i++)
    {
        $c[] = array();
        for ($j = 0; $j < 4; $j++)
        {
            if ($i == $j) $c[$i][] = 1;
            else $c[$i][] = 0;
            echo $c[$i][$j], " ";
        }
        echo "\n";
    }
?>