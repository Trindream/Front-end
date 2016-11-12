var ADD_OPERATOR = "+";
var SUB_OPERATOR = "-";
var MUL_OPERATOR = "*";
var DIV_OPERATOR = "/";
var POW_OPERATOR = "^";


function askDigit()
{
    return +prompt("Введите число: ", "");
}

function askOperatior()
{
    return prompt("Введите операцию (+,-,*,/,^): ", "");
}

function calculate(operand1, operand2, operator)
{
    var result = null;
    if (operator == ADD_OPERATOR)
        result = operand1 + operand2;
    else if(operator == SUB_OPERATOR)
        result = operand1 - operand2;
    else if(operator == MUL_OPERATOR)
        result = operand1 * operand2;
    else if(operator == DIV_OPERATOR)
		if (operand2 != 0)
			result = operand1 / operand2;
		else
			alert("Деление на ноль");
    else if(operator == POW_OPERATOR)
	{
		result = Math.pow(operand1, operand2);
	}
    else
        alert("Неизвестная операция: " + operator);
    return result;
}


var operand1 = askDigit();
var operator = askOperatior();
var operand2 = askDigit();

var result = calculate(operand1, operand2, operator);
if (result != null)
{
    alert(operand1 + operator + operand2 + "=" + result);
}