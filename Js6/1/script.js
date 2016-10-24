var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

function start()
{  
	var canvas = document.getElementById("canvas");

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	var x = 0, y = 0;
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "red";

	function animateCircle()
	{
		ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		ctx.beginPath();
		ctx.arc(x, y, 15, 0, Math.PI * 2, false);
		ctx.fill();
		x++;
		y++;
		if (x > CANVAS_WIDTH)
		{
			x = 0;
			y = 0;
		}
		setTimeout(animateCircle, 5);
	}
	animateCircle();
}