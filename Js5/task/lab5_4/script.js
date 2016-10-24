var SIZE = 32;
var map = 
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 4, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var width = map[0].length, height = map.length;

function start()
{  
	var myCanvas = document.getElementById("myCanvas");
	ctx = myCanvas.getContext('2d');
	myCanvas.width = width * SIZE;
	myCanvas.height = height * SIZE;
	DrawMap(ctx);
}

function DrawMap(ctx)
{
	var sprite = new Image();
	sprite.src = "mario_sprite.png";
	sprite.onload = function() {
		for (var y = 0; y < map.length; y++)
			for (var x = 0; x < map[y].length; x++)
			{
				ctx.drawImage(sprite, 16 * 4 + 1, 1, 14, 14, x * SIZE, y * SIZE, SIZE, SIZE);
				if (map[y][x] == 1)
					ctx.drawImage(sprite, 0, 0, 16, 16, x * SIZE, y * SIZE, SIZE, SIZE);
				else if (map[y][x] == 2)
					ctx.drawImage(sprite, 16, 0, 16, 16, x * SIZE, y * SIZE, SIZE, SIZE);
				else if (map[y][x] == 3)
					ctx.drawImage(sprite, 32, 0, 16, 16, x * SIZE, y * SIZE, SIZE, SIZE);
				else if (map[y][x] == 4)
					ctx.drawImage(sprite, 48, 0, 16, 16, x * SIZE, y * SIZE, SIZE, SIZE);
			}
		ctx.drawImage(sprite, 0, 17, 16, 16, 11 * SIZE + 8, 12 * SIZE + 8, SIZE, SIZE);
		ctx.drawImage(sprite, 17, 17, 16, 16, 10 * SIZE + 8, 9 * SIZE, SIZE, SIZE);
		ctx.drawImage(sprite, 0, 76, 48, 20, 5 * SIZE + 8, 13 * SIZE - 8, 48 * 2, 20 * 2);
		ctx.drawImage(sprite, 32, 34, 64, 16, 1 * SIZE, 13 * SIZE, 64 * 2, 16 * 2);
		ctx.drawImage(sprite, 96, 16, 32, 32, 18 * SIZE, 12 * SIZE, 32 * 2, 32 * 2);
		ctx.drawImage(sprite, 0, 34, 32, 16, 15 * SIZE, 13 * SIZE, 32 * 2, 16 * 2);
		ctx.drawImage(sprite, 0, 51, 64, 24, 16 * SIZE, 3 * SIZE, 64 * 2, 24 * 2);
		ctx.drawImage(sprite, 65, 51, 48, 24, 2 * SIZE, 4 * SIZE, 48 * 2, 24 * 2);
	}
}










