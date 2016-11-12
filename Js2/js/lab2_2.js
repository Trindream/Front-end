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
console.dir(dyadyaFedor.cat.name);

cat.name = "Иванов";
console.dir(dyadyaFedor.cat.name);
console.log("переменная cat и dyadyaFedor.cat ссылаются на один объект");