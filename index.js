function blog()
{
	
}

function login()
{
	var cmd = document.getElementById("cmd");

	var info = document.createElement("input");
	info.setAttribute("value", "Insert username below and press ENTER");
	info.setAttribute("readonly", true);
	cmd.appendChild(info);

	var input = document.createElement("input");
	input.setAttribute("id", "input");
	cmd.appendChild(input);

	var inputEvent = document.getElementById("input");
	inputEvent.addEventListener("keydown", function(e)
	{
	    if (e.keyCode === 13)
	    {
	    	validate(inputEvent.value);
	    }
	});
}

function validate(username)
{

    alert('Username is ' + username);
}

function admin()
{
	
}