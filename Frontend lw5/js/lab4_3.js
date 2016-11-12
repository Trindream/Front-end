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