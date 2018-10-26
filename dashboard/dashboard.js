document.getElementById("home").style.display="block";
document.getElementById("clients").style.display="none";
document.getElementById("blogs").style.display="none";

document.getElementById("homeBut").style.backgroundColor="white";
document.getElementById("clientsBut").style.backgroundColor="transparent";
document.getElementById("blogsBut").style.backgroundColor="transparent";

function getClients()
{
	document.getElementById("home").style.display="none";
	document.getElementById("clients").style.display="block";
	document.getElementById("blogs").style.display="none";
}

function getBlogs()
{
	document.getElementById("home").style.display="none";
	document.getElementById("clients").style.display="none";
	document.getElementById("blogs").style.display="block";
}

function getHome()
{
	document.getElementById("home").style.display="block";
	document.getElementById("clients").style.display="none";
	document.getElementById("blogs").style.display="none";
}

function seeClient()
{
	console.log(document.getElementById("ClientSelect").value);
}

function newClient()
{
	
}

function seeProject()
{
	
}

function newProject()
{
	
}

function background(id)
{
	document.getElementById(id).display.backgroundColor = "white";
}