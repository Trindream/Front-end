function Calculator()
{
	this.operand1;
	this.operand2;
	this.result = 0;
	
	this.Read = function()
	{
		this.operand1 = +prompt("Введите первое число: ", "");
		this.operand2 = +prompt("Введите второе число: ", "");
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
		this.result = this.operand1 / this.operand2;
	};
	
	this.Sub = function()
	{
		this.result = this.operand1 - this.operand2;
	};
	
	this.GetResult = function()
	{
		return result;
	};
}

var calculator = new Calculator();
calculator.Read();
console.log(calculator.Sum());
console.log(calculator.Mul());
