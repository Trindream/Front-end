<?
    header("Content-Type: text/plain");
	
    //a)
    $primeNumbers = array();
    $number = 2;
    echo "a:\n";
    while (count($primeNumbers) < 10)
    {
        $isPrime = true;
        for ($i = 2; $i <= $number / 2; $i++)
		{
            if (($number % $i) == 0) $isPrime = false;
		}
        if ($isPrime)
        {
            $primeNumbers[] = $number;
            echo $number, " ";
        }
        $number++;
    }
	
    //b)
    $functions = array
	(
        "count" => "Подсчитывает количество элементов массива или что-то в объекте",
        "is_array" => "Определяет, является ли переменная массивом",
        "array_merge" => "Сливает один или большее количество массивов",
        "empty" => "Проверяет, пуста ли переменная",
        "print_r" => "Выводит удобочитаемую информацию о переменной"
    );
    echo "\n\nb:\n";
    foreach ($functions as $name => $value)
	{
        echo $name, " - ", $value, "\n";
	}
	
    //c)
    $matrix = array();
    echo "\nc:\n";
    for ($i = 0; $i < 4; $i++)
    {
        $matrix[] = array();
        for ($j = 0; $j < 4; $j++)
        {
            if ($i == $j) 
			{
				$matrix[$i][] = 1;
			}
            else 
			{
				$matrix[$i][] = 0;
			}
            echo $matrix[$i][$j], " ";
        }
        echo "\n";
    }