var subStr = "Черт побери";
if (prompt("Введите сообщение: ", "").toLowerCase().indexOf(subStr.toLowerCase()) != -1)
	alert("Подскользнулся, упал. Очнулся - гипс");
else
	alert("Я вас не понимаю");