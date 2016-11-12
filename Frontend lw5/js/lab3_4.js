var listOfParagraphs = document.getElementsByTagName("p");
for (var i = 2; i < listOfParagraphs.length; i += 3)
	listOfParagraphs[i].style.background = "green";