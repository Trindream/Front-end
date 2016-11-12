var swearWords = ["черт", "ихний", "извени"];

function ModerateMessage(message)
{
	var tempMessage = message.toLowerCase();
	var result = message;
	for (var i = 0; i < swearWords.length; i++)
	{
		var pos = tempMessage.indexOf(swearWords[i]);
		while(pos != -1)
		{
			var newResult = "";
			for (var j = 0; j < message.length; j++)
				if (j >= pos && j < pos + swearWords[i].length)
					newResult += "*";
				else
					newResult += result[j];
			result = newResult;
			pos = tempMessage.indexOf(swearWords[i], pos + swearWords[i].length);
		}
	}
	return result;
}

var message = "Черт побери Вас, сэр!\nИзвени.";
console.log(ModerateMessage(message));