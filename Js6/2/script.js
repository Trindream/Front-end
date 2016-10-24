var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

var POINT_WIDTH = 3;
var POINT_HEIGHT = 3;

function start()
{  
	var canvas = document.getElementById("canvas");

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	var x = -CANVAS_WIDTH / 2;
	var a = 0.01, b = 0, c = 0;
	var ctx = canvas.getContext('2d');
	ctx.fillStyle="black";
	ctx.fillRect(0, CANVAS_HEIGHT / 2, CANVAS_WIDTH, 1);
	ctx.fillRect(CANVAS_WIDTH / 2, 0 / 2, 1, CANVAS_HEIGHT);
	ctx.strokeText("Y", CANVAS_WIDTH / 2 + 10, 10);
	ctx.strokeText("X", CANVAS_WIDTH - 15, CANVAS_HEIGHT / 2 + 15);
	ctx.fillStyle="green";

	function drawParabola()
	{
		ctx.fillRect(CANVAS_WIDTH / 2 + x - POINT_WIDTH / 2, CANVAS_HEIGHT / 2 - a * x * x + b * x + c - POINT_HEIGHT / 2, POINT_WIDTH, POINT_HEIGHT);
		x += 1;
		setTimeout(drawParabola, 5);
	}
	drawParabola();
}