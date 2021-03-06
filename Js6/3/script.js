var CANVAS_WIDTH = 300;
var CANVAS_HEIGHT = 300;
var SUN_TO_EARTH_DISTANCE = 90;
var SUN_TO_MARS_DISTANCE = 40;
var EARTH_TO_MOON_DISTANCE = 15;
var FPS = 1000 / 60;

var g_ctx = null;
var earthX, earthY;

var g_sun = new Image();
g_sun.src = 'img/sun.png';
var g_earth = new Image();
g_earth.src = 'img/earth.png';
var g_moon = new Image();
g_moon.src = 'img/moon.png';
var g_mars = new Image();
g_mars.src = 'img/mars.png';

var g_earthRotationAngle = 0;
var g_moonRotationAngle = 0;
var g_marsRotationAngle = 0;

function start()
{
	g_ctx = document.getElementById('canvas').getContext('2d');
	g_ctx.globalCompositeOperation = 'destination-over';
	g_ctx.fillStyle = 'rgba(0,0,0,0.4)';

	setTimeout(draw, FPS)
}

function draw()
{
	g_ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	drawEarth();
	drawMars();
	drawOrbit();
	drawSun();
	setTimeout(draw, FPS);
}

function drawSun()
{
	g_ctx.drawImage(g_sun, 0, 0, 300, 300);
}

function drawOrbit()
{
	g_ctx.strokeStyle = 'rgba(0,153,255,0.4)';
	g_ctx.beginPath();
	g_ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
	g_ctx.stroke();
	g_ctx.strokeStyle = 'rgba(255,153,0,0.4)';
	g_ctx.beginPath();
	g_ctx.arc(150, 150, 53, 0, Math.PI * 2, false);
	g_ctx.stroke();
}

function drawEarth()
{
	earthX = 150 + SUN_TO_EARTH_DISTANCE * Math.cos(degreesToRadians(g_earthRotationAngle));
	earthY = 150 + SUN_TO_EARTH_DISTANCE * Math.sin(degreesToRadians(g_earthRotationAngle));
	g_ctx.save();
	g_ctx.translate(earthX, earthY);
	g_ctx.rotate(degreesToRadians(g_earthRotationAngle));
	g_ctx.drawImage(g_earth, 0, 0);
	drawMoon();
	processEarthAngle();
	g_ctx.restore();
}

function drawMoon()
{
	g_ctx.translate(12, 12);
	g_ctx.rotate(degreesToRadians(g_moonRotationAngle));
	g_ctx.drawImage(g_moon, EARTH_TO_MOON_DISTANCE, 0);
	
	g_ctx.strokeStyle = 'rgba(220,220,220,0.4)';
	g_ctx.beginPath();
	g_ctx.arc(0, 0, 26, 0, Math.PI * 2, false);
	g_ctx.stroke();
}

function drawMars()
{
	g_ctx.save();
	g_ctx.translate(150,150);
	g_ctx.rotate(degreesToRadians(g_marsRotationAngle));
	processMarsAngle();
	g_ctx.drawImage(g_mars, SUN_TO_MARS_DISTANCE, 0);
	g_ctx.restore();
}

function degreesToRadians(num)
{
	return num * Math.PI / 180;
}

function processEarthAngle()
{
	g_earthRotationAngle--;
	if (g_earthRotationAngle < 0)
		g_earthRotationAngle += 360;
	g_moonRotationAngle += 4;
	if (g_moonRotationAngle > 0)
		g_moonRotationAngle -= 360;
}

function processMarsAngle()
{
	g_marsRotationAngle += 0.5;
	if (g_earthRotationAngle > 360)
		g_earthRotationAngle -= 360;
}