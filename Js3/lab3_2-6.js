//2
var listOfHeaders = document.getElementsByClassName("header_main_text");
for (var i = 0; i < listOfHeaders.length; i++)
	console.log(listOfHeaders[i].innerHTML);

//3
var verse = 
"Я памятник себе воздвиг нерукотворный,\n\
К нему не зарастёт народная тропа,\n\
Вознёсся выше он главою непокорной\n\
Александрийского столпа."

var stringsOfVerse = verse.split("\n");
for (var i = 0; i < listOfHeaders.length; i++)
	listOfHeaders[i].innerHTML = stringsOfVerse[i % stringsOfVerse.length];

//4
var listOfParagraphs = document.getElementsByTagName("p");
for (var i = 2; i < listOfParagraphs.length; i += 3)
	listOfParagraphs[i].style.background = "green";

//5
for (var i = 3; i < listOfParagraphs.length; i += 4)
	listOfParagraphs[i].hidden = true;

//6
var listOfImg = document.getElementsByTagName("img");
for (var i = 0; i < listOfImg.length; i++)
	console.log(listOfImg[i].getAttribute("src")); //listOfImg[i].src