var verse = 
"Я памятник себе воздвиг нерукотворный,\n\
К нему не зарастёт народная тропа,\n\
Вознёсся выше он главою непокорной\n\
Александрийского столпа."

var stringsOfVerse = verse.split("\n");
for (var i = 0; i < listOfHeaders.length; i++)
	listOfHeaders[i].innerHTML = stringsOfVerse[i % stringsOfVerse.length];