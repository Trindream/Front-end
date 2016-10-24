var width = 900, height = 600;

function start()
{  
	var myCanvas = document.getElementById("myCanvas");
	myCanvas.width = width;
	myCanvas.height = height;
	myCanvas.style.display = "block";
	myCanvas.style.margin = "0 auto";
	ctx = myCanvas.getContext('2d');
	Draw(ctx);
}

function Random(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Draw(ctx)
{
	ctx.fillStyle = "#a5e4f6";
	ctx.fillRect(0, 0, width, height);
	ctx.beginPath();
	ctx.arc(30, 40, 50, 0, Math.PI * 2, false);
	ctx.fillStyle = "#feee00";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30, 40, 100, 0, Math.PI * 2, false);
	ctx.fillStyle = "rgba(255, 255, 0, 0.4)";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(400, 650, 500, -Math.PI * 0.8, -Math.PI * 0.3, false);
	ctx.fillStyle = "#a6bfdd";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(-150, 360, 300, -Math.PI, 0, false);
	ctx.fillStyle = "#a6bfdd";
	ctx.fill();
	var leafH = 330;
	for (var i = 0; i <= 900 / 90; i++)
	{
		leafH -= Random(5, 20);
		ctx.beginPath();
		ctx.arc(90 * i, leafH, Random(50, 100), 0, -Math.PI * 2, false);
		ctx.fillStyle = "#bfd100";
		ctx.fill();
	}
	leafH = 380;
	for (var i = 0; i <= 900 / 90; i++)
	{
		leafH -= Random(5, 20);
		ctx.beginPath();
		ctx.arc(90 * i, leafH, Random(50, 100), 0, -Math.PI * 2, false);
		ctx.fillStyle = "#94c420";
		ctx.fill();
	}
	leafH = 420;
	for (var i = 0; i <= 900 / 90; i++)
	{
		leafH -= 10;
		ctx.beginPath();
		ctx.arc(90 * i, leafH, Random(80, 100), 0, -Math.PI * 2, false);
		ctx.fillStyle = "#01b110";
		ctx.fill();
	}
	ctx.beginPath();
	ctx.arc(width / 2, height * 2.5, height * 2, -Math.PI * 0.7, -Math.PI * 0.3, false);
	ctx.fillStyle = "#e5d402";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(width / 2 + 200, height * 3.1, height * 2.5 , -Math.PI * 0.7, -Math.PI * 0.3, false);
	ctx.fillStyle = "#94bd01";
	ctx.fill();
	
	ctx.fillStyle = "#e98201";
	ctx.fillRect(430, 500, 400, 30);
	ctx.fillStyle = "#93430e";
	ctx.fillRect(425, 530, 410, 5);
	ctx.beginPath();
	ctx.moveTo(630, 80);
	ctx.lineTo(830, 280);
	ctx.lineTo(430, 280);
	ctx.lineTo(630, 80);
	ctx.fillStyle = "#febc20";
	ctx.fill()
	ctx.fillStyle = "#d68e04";
	ctx.fillRect(425, 280, 410, 20);;
	for (var i = 0; i < 10; i++)
	{
		ctx.beginPath();
		ctx.moveTo(430, 480 - i * 20);
		ctx.lineTo(830, 480 - i * 20);
		ctx.lineTo(833, 500 - i * 20);
		ctx.lineTo(427, 500 - i * 20);
		ctx.lineTo(430, 480 - i * 20);
		ctx.fillStyle = "#bd6207";
		ctx.fill();
		ctx.strokeStyle = "#812705";
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.moveTo(630, 80);
	ctx.lineTo(850, 310);
	ctx.lineTo(860, 310);
	ctx.lineTo(630, 60);
	ctx.lineTo(400, 310);
	ctx.lineTo(410, 310);
	ctx.lineTo(630, 80);
	ctx.fillStyle = "#f4d4ad";
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#e4121d";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(630, 200, 40, 0, Math.PI * 2, false);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#2d5554";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(630, 200, 30, Math.PI * 0.55, Math.PI * 1.45, false);
	ctx.lineTo(625, 230);
	ctx.fillStyle = "#009de6";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#2d5554";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(630, 200, 30, -Math.PI * 0.45, -Math.PI * 0.05, false);
	ctx.lineTo(635, 195);
	ctx.lineTo(635, 170);
	ctx.fillStyle = "#009de6";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#2d5554";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(630, 200, 30, Math.PI * 0.05, Math.PI * 0.45, false);
	ctx.lineTo(635, 205);
	ctx.lineTo(660, 205);
	ctx.fillStyle = "#009de6";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#2d5554";
	ctx.stroke();
	for (var i = 0; i < 2; i++)
	{
		ctx.fillStyle = "white";
		ctx.strokeStyle = "#743215";
		ctx.fillRect(500 + i * 180, 350, 80, 120);
		ctx.strokeRect(500 + i * 180, 350, 80, 120);
		ctx.fillStyle = "#009de6";
		ctx.fillRect(510 + i * 180, 360, 25, 100);
		ctx.strokeRect(510 + i * 180, 360, 25, 100);
		ctx.fillRect(545 + i * 180, 360, 25, 30);
		ctx.strokeRect(545 + i * 180, 360, 25, 30);
		ctx.fillRect(545 + i * 180, 400, 25, 60);
		ctx.strokeRect(545 + i * 180, 400, 25, 60);
		
	}
	var x = 50, y = 550;
	for (var i = 0; i < 3; i++)
	{
		ctx.beginPath();
		ctx.moveTo(x + i * 50, y - i * 30);
		ctx.lineTo(x + 30 + i * 50, y - 10 - i * 30);
		ctx.lineTo(x + 30 + i * 50, y - 90 - i * 30);
		ctx.lineTo(x + 15 + i * 50, y - 100 - i * 30);
		ctx.lineTo(x + i * 50, y - 80 - i * 30);
		ctx.lineTo(x + i * 50, y - i * 30);
		ctx.fillStyle = "#bd6207";
		ctx.fill();
		ctx.strokeStyle = "#812705";
		ctx.stroke();
	}
	x = 30;
	y = 540;
	for (var i = 0; i < 2; i++)
	{
		ctx.beginPath();
		ctx.moveTo(x, y - i * 30);
		ctx.lineTo(x + 170, y - 100 - i * 30);
		ctx.lineTo(x + 170, y - 110 - i * 30);
		ctx.lineTo(x, y - 10 - i * 30);
		ctx.lineTo(x, y - i * 30);
		ctx.fillStyle = "#bd6207";
		ctx.fill();
		ctx.strokeStyle = "#812705";
		ctx.stroke();
	}
}




