//My first http request
var username = "OluwoleDove";
var message = "My first http request";
var http = require('http');

var request = http.get("http://google.com/"+ username + ".json" + message  , function(response){
	console.dir(response);//print screen objects
});

