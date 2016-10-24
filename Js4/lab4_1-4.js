//1
function Hide(event)
{
	this.style.visibility = "hidden";
	//$(".learn_more").css("visibility", "hidden");
}
$(".learn_more").click(Hide);

//2 Сработают обе функции, т.к. уделение было некорректно

//3
function Switch(e)
{
	var text = $(".mini_text")[0];
	if (text.style.display == "none")
	{
		this.style.backgroundPosition = "0 0";
		text.style.display = "block";
	}
	else
	{
		this.style.backgroundPosition = "70px 0";
		text.style.display = "none";
	}
}

var switcher = $(".arrow")[0];
switcher.addEventListener("click", Switch);

//4
var comments = [
"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna \
aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”",
"“Я памятник себе воздвиг нерукотворный, к нему не зарастёт народная тропа, \
вознёсся выше он главою непокорной Александрийского столпа. \
Нет, весь я не умру - душа в заветной лире мой прах переживёт и тлeнья убежит - \
и славен буду я, доколь в подлунном мире жив будет хоть один пиит.”"];

var authors = ["Jon Doe", "Пушкин А.С."];
var currentComment = 0;
var comment = $(".comment_block .comment")[0];
var author = $(".comment_block .author")[0];

function UpdateComment()
{
	comment.innerHTML = comments[currentComment];
	author.innerHTML = authors[currentComment];
}

function NextComment()
{
	currentComment = ++currentComment % comments.length;
	UpdateComment();
}

function PrevComment()
{
	currentComment--;
	if (currentComment < 0)
		currentComment = comments.length - 1;
	UpdateComment();
}

$(".arrow_left")[0].addEventListener("click", PrevComment);
$(".arrow_right")[0].addEventListener("click", NextComment);







