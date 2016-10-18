var username = "OluwoleDove";
var message = "My first http request";
var http = require('http');

/*function printMessage(userName, badgeCount, points){
	var message = userName + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript " 
	console.log(message);
}
*/
//printMessage("JOHN", 35, 15750);
//Use get request to connect to any URL.

var request = http.get("http://google.com/"+ username + ".json" + message, function(response){
	console.dir(response);//print screen objects
});

