const express = require("express");
const app = express();
const http = require("http").Server(app);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html")
})

http.listen(3500, function(){
	console.log("Listening on port 3500")
})