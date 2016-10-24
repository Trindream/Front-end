var dyadyaFedor = {
	age: 12,
	male: true,
	adress: "Простоквашино",
	dog: {
		name: "Шарик",
		age: 8,
	}
};

var cat = {
	name: "Матроскин",
	age: 9
}

dyadyaFedor.cat = cat;
console.log(dyadyaFedor);

cat.name = "Иванов";
console.log(dyadyaFedor.cat);
//переменная cat и dyadyaFedor.cat ссылаются на один объект