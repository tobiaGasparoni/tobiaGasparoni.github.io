var cmd = document.getElementById("cmd");

function admin()
{
	document.getElementById("cmd").value += ("\nGato favorito");
	
	var inputEvent = document.getElementById("input");
	inputEvent.addEventListener("keydown", gato(e));
}

function gato(e)
{
	if (e.keyCode === 13)
	    {
	    	if(document.getElementById("input").value === "Basilio")
			{
				document.getElementById("cmd").value += ("\nGato favorito aprobado: Basilio");
				document.getElementById("cmd").value += ("\nIngrese contraseña");
				inputEvent.addEventListener("keydown", password(e));
			}
			else
				document.getElementById("cmd").value += ("\nAcceso denegado: gato favorito no es " + document.getElementById("input").value);
			document.getElementById("input").value = "";
	    }
}

function password(e)
{
	if (e.keyCode === 13)
	{
		if(document.getElementById("input").value === "Contraseña")
		{
			document.getElementById("cmd").value += ("\nAcceso aprobado");
			document.getElementById("cmd").value += ("\nAquí están sus proyectos");
		}
		else
			document.getElementById("cmd").value += ("\nAcceso denegado: contraseña incorrecta");
		document.getElementById("input").value = "";
	}
}