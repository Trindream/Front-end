var verse = 
"Я памятник себе воздвиг нерукотворный,\n\
К нему не зарастёт народная тропа,\n\
Вознёсся выше он главою непокорной\n\
Александрийского столпа.\n\
Нет, весь я не умру - душа в заветной лире\n\
Мой прах переживёт и тлeнья убежит -\n\
И славен буду я, доколь в подлунном мире\n\
Жив будет хоть один пиит.\n\
Слух обо мне пройдёт по всей Руси великой,\n\
И назовёт меня всяк сущий в ней язык,\n\
И гордый внук славян, и финн, и ныне дикий\n\
Тунгус, и друг степей калмык.\n\
И долго буду тем любезен я народу,\n\
Что чувства добрые я лирой пробуждал,\n\
Что в мой жестокий век восславил я свободу\n\
И милость к падшим призывал.\n\
Веленью бoжию, о муза, будь послушна,\n\
Обиды не страшась, не требуя венца;\n\
Хвалу и клевету приeмли равнодушно\n\
И не оспаривай глупца."

var listOfStrings = verse.split("\n");
var ulItem = document.createElement("ul");
ulItem.className = "Exegi monumentum";
ulItem.style.listStyleType = "none";
for (var i = 0; i < listOfStrings.length; i++)
{
	var string = document.createElement("li");
	string.innerHTML = listOfStrings[i];
	if (i % 4 == 3)
	{
		string.style.marginBottom = "30px";
		string.style.marginLeft = "50px";
	}
	ulItem.appendChild(string);
}
document.body.appendChild(ulItem);