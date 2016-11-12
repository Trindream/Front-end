function Calculator()
{
	this.operand1;
	this.operand2;
	this.result = 0;
	
	this.Read = function()
	{
		this.operand1 = +prompt("Введите первое число: ", "");
		this.operand2 = +prompt("Введите второе число: ", "");
		if (isNaN(this.operand1))
			this.operand1 = 0;
		if (isNaN(this.operand2))
			this.operand2 = 0;
	};
	
	this.Sum = function()
	{
		this.result = this.operand1 + this.operand2;
		return this.result;
	};
	
	this.Mul = function()
	{
		this.result = this.operand1 * this.operand2;
		return this.result;
	};
	
	this.Div = function()
	{
		if (this.operand2 == 0)
			this.result = "Деление на ноль.";
		else
			this.result = this.operand1 / this.operand2;
	};
	
	this.Sub = function()
	{
		this.result = this.operand1 - this.operand2;
	};
	
	this.GetResult = function()
	{
		return this.result;
	};
}

var calculator = new Calculator();
calculator.Read();
console.log(calculator.Sum());
console.log(calculator.Mul());
calculator.Div();
console.log(calculator.GetResult());
