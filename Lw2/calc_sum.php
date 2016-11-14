<?
    if (count($_GET) < 3)
	{
        echo "Not enough arguments!";
	}
    elseif (count($_GET) > 3)
	{
        echo "Excess arguments!";
	}
    elseif (!(isset($_GET['arg1'], $_GET['arg2'], $_GET['operation'])))
	{
        echo "Incorrect name!";
	}
    elseif (!(is_numeric($_GET['arg1'])) || !(is_numeric($_GET['arg2'])))
	{
        echo "Incorrect argument!";
	}
    else
	{
        header("Content-Type: text/plain");
        switch ($_GET['operation'])
		{
            case "add":
                echo $_GET['arg1'] + $_GET['arg2'];
                break;
				
            case "sub":
                echo $_GET['arg1'] - $_GET['arg2'];
                break;
				
            case "mul":
                echo $_GET['arg1'] * $_GET['arg2'];
                break;
			
            case "div":
                if ($_GET['arg2'] != 0)
				{
                    echo $_GET['arg1'] / $_GET['arg2'];
				}
                else
				{
	                header("Content-Type: text/html");
                    echo "Division by zero!";
                }
                break;
				
            default:
	            header("Content-Type: text/html");
                echo "Incorrect operation!";
		}
    }