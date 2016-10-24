var productList = document.body.firstElementChild.firstElementChild.children;
for (var i = 0; i < productList.length; i++)
	console.log(productList[i]);

productList = document.getElementById("productsList").getElementsByTagName("li");
for (var i = 0; i < productList.length; i++)
	console.log(productList[i]);