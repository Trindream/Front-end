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







