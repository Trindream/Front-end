function start()
{  
	var myCanvas = document.getElementById("myCanvas");
	ctx = myCanvas.getContext('2d');
	DrawA(ctx);
	DrawB(ctx, 250, 50);
	DrawSmile(ctx, 150, 220);
}

function DrawA(ctx)
{
	ctx.beginPath();
	ctx.moveTo(30, 60);
	ctx.lineTo(30, 140);
	ctx.lineTo(110, 140);
	ctx.lineTo(30, 60);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(40, 60);
	ctx.lineTo(120, 60);
	ctx.lineTo(120, 140);
	ctx.lineTo(40, 60);
	ctx.fill();
}

function DrawB(ctx, x, y)
{
	ctx.strokeSty
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x - 90, y + 45);
	ctx.lineTo(x, y + 90);
	ctx.lineTo(x, y);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 90, y + 45);
	ctx.lineTo(x, y + 90);
	ctx.stroke();
	
	x -= 45;
	y += 45;
	
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 45, y - 90);
	ctx.lineTo(x + 90, y);
	ctx.lineTo(x, y);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 45, y + 90);
	ctx.lineTo(x + 90, y);
	ctx.stroke();
}

function DrawSmile(ctx, x, y)
{
	ctx.beginPath();
	ctx.arc(x, y, 60, 0, Math.PI * 2, false);
	ctx.fillStyle = "#f0e020";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#a09000";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(x, y - 5, 45, Math.PI * 0.2, Math.PI * 0.8, false);
	ctx.lineTo(x + 45 * Math.cos(Math.PI * 0.2), y + 37 * Math.sin(Math.PI * 0.2));
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(x - 20, y - 10, 15, 0, Math.PI * 2, false);
	ctx.moveTo(x + 35, y - 10);
	ctx.arc(x + 20, y - 10, 15, 0, Math.PI * 2, false);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(x - 15, y - 5, 5, 0, Math.PI * 2, false);
	ctx.moveTo(x + 20, y - 5);
	ctx.arc(x + 15, y - 5, 5, 0, Math.PI * 2, false);
	ctx.fillStyle = "#0080ff";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#202080";
	ctx.stroke();
}




