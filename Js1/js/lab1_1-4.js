//1)
var EARTH = "Земля";
var name = "Петя";

console.log(EARTH);
console.log(name);

//2)
login = prompt("Введите ваш логин: ", "");
if (login == "Админ")
{
	var passwordOfAdmin = prompt("Введите пароль: ", "");
	if (passwordOfAdmin == "Черный Властелин")
		alert("Добро пожаловать!");
	else if (login == null)
		alert("Вход отменен");
	else
		alert("Пароль не верен");
}
else if (login == null)
	alert("Вход отменен");
else
	alert("Я вас не знаю");

//3)
for (var i = 2; i <= 10; i += 2)
	console.log(i);
var n = 2;
while (n <= 10)
{
	console.log(n);
	n += 2;
}

//4)
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
	if (min >= 2)
		for (var i = min; i <= max; i++)
			if (IsPrime(i))
				console.log(i);
}

PrintPrimeNumbers(2, 10);



