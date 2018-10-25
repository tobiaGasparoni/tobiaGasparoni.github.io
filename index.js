var cmd = document.getElementById("cmd");
var input = document.getElementById("input");

var blogActive = false;
var loginActive = false;
var adminActive = false;

var emailParameter = "";
var adminParameter = 0;

var state = 0;

function blog()
{
	/*
		States (waiting):
			0: not initialized
			1: displays blog posts (blog post number)
	*/
	state = 0;

	blogActive = true;
	loginActive = false;
	adminActive = false;
	
	println("\nType the number of the blog post you want to read");

	for(var i = 0; i < blogPosts.length; i++)
	{
		println((i+1) + ") " + blogPosts[i].title);
	}

	state = 1;
}

function login()
{
	/*
		States (waiting):
			0: not initialized
			1: requests email (client email)
			2: requests password (client password)
			3: shows projects with tobia (proyect number to be opened)
	*/
	state = 0;

	blogActive = false;
	loginActive = true;
	adminActive = false;

	println("\nWrite your registered email");

	state = 1;
}

function admin()
{
	/*
		States (waiting):
			0: not initialized
			1: requests email
			2: requests password
			3: sends email with randomly generated number and requests that number
			4: displays projects
	*/
	state = 0;

	blogActive = false;
	loginActive = false;
	adminActive = true;

	println("\nWrite your email");

	state = 1;
}

function read(event)
{
	if(event.keyCode === 13)
	{
		if(blogActive === true)
		{
			switch(state) {
			    case 0:
			        println("Mistake in the system. Reload plis.");
			        break;
			    case 1:
			    	var number = parseInt(document.getElementById("input").value)-1;
			        for(var i = 0; i < blogPosts.length; i++)
			        {
			        	if(i === number)
			        	{
			        		println("");
			        		println(blogPosts[i].title);
			        		println(blogPosts[i].date);
			        		for(var j = 0; j < blogPosts[i].paragraphs.length; j++)
			        			println("\n" + blogPosts[i].paragraphs[j]);
			        	}
			        }
			        empty();
			        break;
			    default:
			        
			}

		}
		else if(loginActive === true)
		{
			switch(state) {
			    case 0:
			    	println("Mistake in the system. Reload plis.");
			    	break;
			    case 1:
			    	var emailString = document.getElementById("input").value;
			    	var found = false;
			    	for(var i = 0; i < myClients.length; i++)
			    	{
			    		if(emailString === myClients[i].email)
			    		{
			    			println("Email " + emailString + " found");
			    			println("Write your associated password");
			    			document.getElementById("input").type = "password";
			    			emailParameter = emailString;
			    			found = true;
			    		}
			    	}
			    	if(found === false)
			    	{
			    		document.getElementById("input").type = "text";
			    		println("The email " + emailString + " was not found in the database");
			    	}
			    	empty();
			    	state++;
			    	break;
			    case 2:
			    	var password = document.getElementById("input").value;
			    	var found = false;
			    	for(var i = 0; i < myClients.length && state === 2; i++)
			    	{
			    		if(emailParameter === myClients[i].email && password === myClients[i].password) 
			    		{
			    			println("Password verified");
			    			println("\nHere are your projects with Tobia:");
			    			for(var j = 0; j < myClients[i].projects.length; j++)
			    			{
			    				println("");
			    				println("Name of project " + (j + 1) + ": " + myClients[i].projects[j].name);
			    				println("Status: " + myClients[i].projects[j].status);
			    				println("Project last modified in: " + myClients[i].projects[j].lastModified);
			    				if(myClients[i].projects[j].openable === true)
			    					println("You have access to this project. You may view its current state.");
			    				else
			    					println("You have been denied access to this project. You may not view its current state.");
			    			}
			    			println("\nType the number of the project you want opened");
			    			document.getElementById("input").type = "text";
			    			found = true;
			    			state++;
			    		}
			    	}
			    	if(found === false)
			    	{
			    		println("The password could not be verified. Try again");
			    	}
			    	empty();
			    	break;
			    case 3:
			    	var number = parseInt(document.getElementById("input").value) - 1;
			    	for(var i = 0; i < myClients.length && state === 3; i++)
			    	{
			    		if(emailParameter === myClients[i].email)
			    		{
				    		for(var j = 0; j < myClients[i].projects.length; j++)
				    		{
				    			if(j === number)
				    			{
				    				if(myClients[i].projects[j].openable === true)
				    				{
					    				var curLink = window.location.href.replace("/index.html", "");
					    				var newLink = curLink + myClients[i].projects[j].url;
					    				window.open(newLink, '_blank');
					    			}
					    			else
					    				println("You cannot access project #" + (j+1));
				    			}
				    		}
				    	}
			    	}
			    	empty();
			    	break;
			    default:
			}
		}
		else if(adminActive === true)
		{
			switch(state) {
			    case 0:
			    	println("Mistake in the system. Reload plis.");
			    	break;
			    case 1:
			    	if(document.getElementById("input").value === "tobia.gasparoni@gmail.com")
			    	{
			    		println("Email approved");
			    		println("Type password");
			    		state++;
			    		empty();
			    	}
			    	else
			    		println("Wrong admin email, try again");
			    	break;
			    case 2:
			    	if(document.getElementById("input").value === "haha")
			    	{
			    		println("Password approved");
			    		adminParameter = Math.floor(Math.random() * 10000);
			    		var clientEmail = "tobia.gasparoni@gmail.com"
			    		var subject = "Verification code";
			    		var body = "The code you must types is: " + adminParameter;
			    		sendMail(clientEmail, subject, body);
			    		println("An email was sent with a four digit number you must write down to gain admin access.");
			    	}
			    	state++;
			    	break;
			    case 3:
			    	if(parseInt(document.getElementById("input").value) === adminParameter)
			    	{
			    		println("GOOD JOB!!!!! Got to sleep now");
			    	}
			    	else
			    		println("Fuck You");
			    	break;
			    case 4:
			    	break;
			    default:
			}
		}
		else
			println("No option in the menu was selected... Please select an option in the menu");
	}
}

function seeClient()
{
	console.log(document.getElementById("ClientSelect").value);
}

function println(message)
{
	document.getElementById("cmd").value += "\n" + message;
	document.getElementById("cmd").scrollBy(0, 1000);
}

function empty()
{
	document.getElementById("input").value = "";
}

function sendMail(clientEmail, subject, body)
{
    var link = "mailto:" + clientEmail
             + "&subject=" + subject
             + "&body=" + body;

    window.open(link, '_blank');
}