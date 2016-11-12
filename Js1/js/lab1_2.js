login = prompt("Введите ваш логин: ", "");
if (login == "Админ")
{
	var passwordOfAdmin = prompt("Введите пароль: ", "");
	if (passwordOfAdmin == "Черный Властелин")
		alert("Добро пожаловать!");
	else if (passwordOfAdmin == null)
		alert("Вход отменен");
	else
		alert("Пароль не верен");
}
else if (login == null)
	alert("Вход отменен");
else
	alert("Я вас не знаю");

