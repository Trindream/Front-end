<?
    if ($argc > 1)
    {
        echo "Number of arguments: ", $argc - 1, "\nArguments: ";
        for ($i = 1; $i < $argc; $i++)
		{
            echo $argv[$i], " ";
		}
    }
    else
	{
        echo "No parameters were specified!";
	}
?>