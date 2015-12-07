var http = require('http'); // expose http object to var http
var url = require('url'); // expose url object to the var url
var querystring = require('querystring'); //expose query string object to the var query string

//callback frunction
var callback = function(req, res){
	var query = url.parse(req.url);
	var route = req.url.split('?')[0];
	var params = querystring.parse(query);
	console.log(params);
	console.log(req.url);
	console.log(route);
	
	
	if(route == "/addNumbers"){
		var result = parseFloat(params.a) + parseFloat(params.b);
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(result + "\n");
	}else{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Unidentified Route!\n');
	}
	
	
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n'); 
	}
		

var server = http.createServer(callback)
server.listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');