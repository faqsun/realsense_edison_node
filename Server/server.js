var express   = require("express");
var app   	= express();
var port  	= 1337;

app.use(express.static(__dirname + '/'));
var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);

io.on('connection', function(socket){
  'use strict';
  console.log('a user connected from ' + socket.request.connection.remoteAddress);
 
	// Check realsense signal
	socket.on('realsense_signal', function(data){
  	socket.broadcast.emit('realsense_signal',data);
  	console.log('Hand Signal: ' + data.name);
	});
  socket.on('disconnect',function(){
	console.log('user disconnected');
  });
});