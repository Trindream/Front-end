function IsPrime(number)
{
	var flag = true;
	for (var i = 2; i <= number / 2; i++)
		if (number % i == 0)
			flag = false;
	return flag;
}

function PrintPrimeNumbers(min, max)
{
	if (min < 2)
		min = 2;
	for (var i = min; i <= max; i++)
		if (IsPrime(i))
			console.log(i);
}

PrintPrimeNumbers(2, 10);
PrintPrimeNumbers(-1, 20);
PrintPrimeNumbers(8, 3);



