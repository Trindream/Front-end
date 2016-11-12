var listOfImg = document.getElementsByTagName("img");
for (var i = 0; i < listOfImg.length; i++)
	console.log(listOfImg[i].getAttribute("src")); //listOfImg[i].src