function People(name, age)
{
	this.name = name;
	this.age = age;
}

function Sort(peoples)
{
	for (var i = 0; i < peoples.length - 1; i++)
	{
		var flag = true;
		for (var j = 0; j < peoples.length - i - 1; j++)
			if (peoples[j].age > peoples[j + 1].age)
			{
				flag = false;
				var temp = peoples[j];
				peoples[j] = peoples[j + 1];
				peoples[j + 1] = temp;
			}
		if (flag) break;
	}
	return peoples;
}

var peoples = [];
peoples.push(new People("Вася", 23));
peoples.push(new People("Маша", 18));
peoples.push(new People("Вовочка", 6));

peoples = Sort(peoples);
for (var i = 0; i < peoples.length; i++)
	console.log(peoples[i].name);