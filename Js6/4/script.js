var COLOR_WHITE = "white";
var COLOR_BLACK = "black";
var COLOR_RED = "red";
var COLOR_GREEN = "green";

var FPS = 1000 / 60;

var GAME_WIDTH = 320;
var GAME_HEIGHT = 480;
var PLAYER_WIDTH = 80;
var PLAYER_HEIGHT = 20;

var BALL_SIZE = 20;
var BALL_SPEED = 4;

var ENEMY_SPEED = 4;

var g_context = null;

// Игровое поле
var g_game = new Rectangle(COLOR_WHITE, 0, 0, GAME_WIDTH, GAME_HEIGHT);

// Игрок и Противник
var g_enemy = new Rectangle(COLOR_BLACK, g_game.width / 2 - PLAYER_WIDTH / 2, 0, PLAYER_WIDTH, PLAYER_HEIGHT);
var g_player = new Rectangle(COLOR_GREEN, g_game.width / 2 - PLAYER_WIDTH / 2, g_game.height - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);

// Мяч (стартует от середины)
var g_ball = new Circle(COLOR_RED, GAME_WIDTH / 2, GAME_HEIGHT / 2, BALL_SIZE);

function init()
{
    var canvas = document.getElementById("canvas");
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    g_context = canvas.getContext("2d");

    // скорость шарика
    g_ball.vX = BALL_SPEED; // скорость по оси х
    g_ball.vY = BALL_SPEED; // скорость по оси у

    canvas.onmousemove = playerMove;
    setInterval(play, FPS);
}

function play()
{
	/*Мы не отчищаем canvas т.к. все равно все закроется белым игровым полем*/
    draw(); //Рисуем объекты
    update(); //Расчитываем координаты
}

function draw()
{
    g_game.draw();
    g_enemy.draw();
    g_player.draw();
    g_ball.draw();
}

function update()
{
    // двигаем ракетку оппонента
    moveEnemy();

    // направляем шарик в противоположную сторону при соприкосновении с ПОЛОМ или ПОТОЛКОМ игрового поля
    if (g_ball.y < g_ball.r || (g_ball.y + g_ball.r > g_game.height))
    {
        g_ball.vY = -g_ball.vY;
    }

    // направляем шарик в противоположную сторону при соприкосновении со СТЕНАМИ игрового поля
    if (g_ball.x < g_ball.r || (g_ball.x + g_ball.r > g_game.width))
    {
        g_ball.vX = -g_ball.vX;
    }
    // Соприкосновение с ракетками
    if (collision(g_enemy) && g_ball.vY < 0)
        g_ball.vY = -g_ball.vY;
	else if (collision(g_player) && g_ball.vY > 0)
	{
        g_ball.vY = -g_ball.vY * 1.2;
		g_ball.vX = g_ball.vX * 1.2;
	}

    // двигаем мячик на его скорость
    g_ball.x += g_ball.vX;
    g_ball.y += g_ball.vY;
}

// движение противника
function moveEnemy()
{
    var x;
    if (g_ball.x < g_enemy.x + g_enemy.width / 2)
    {
        x = g_enemy.x - ENEMY_SPEED;
    }
    if (g_ball.x > g_enemy.x + g_enemy.width / 2)
    {
        x = g_enemy.x + ENEMY_SPEED;
    }

    //Убедимся, что новые координаты не выходят за рамки поля
    if ((x > 0) && (x < (g_game.width - g_enemy.width)))
    {
        g_enemy.x = x;
    }
}

// Проверка пересечений объектов (координата + ширина)
function collision(obj)
{
	if ((obj.x < g_ball.x) && (obj.x + obj.width > g_ball.x))
    var hasCollisionFromTopY = (obj.y + obj.height > g_ball.y - g_ball.r);
    var hasCollisionsFromBottomY = (obj.y < g_ball.y + g_ball.r);
    return hasCollisionFromTopY && hasCollisionsFromBottomY;
}

// движение игрока
function playerMove(event)
{
    var x = event.pageX;
    // условие проверяет не выходит ли ракетка за пределы поля
    if ((g_player.width / 2 < x) && x < (g_game.width - g_player.width / 2))
    {
        // привязываем положение мыши к середине ракетки
        g_player.x = x - g_player.width / 2;
    }
}

//Конструктор для прямоугольника
function Rectangle(color, x, y, width, height)
{
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    // функция рисует прямоугольник согласно заданным параметрам
    this.draw = function() {
        g_context.fillStyle = this.color;
        g_context.fillRect(this.x, this.y, this.width, this.height);
    };
}

function Circle(color, x, y, size)
{
    this.color = color;
    this.x = x;
    this.y = y;
    this.r = size / 2;
    this.draw = function() {
        g_context.fillStyle = this.color;
		g_context.beginPath();
		g_context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		g_context.fill();
    };
}