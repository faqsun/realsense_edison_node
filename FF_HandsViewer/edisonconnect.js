// var socket = io ('change this to IP node.js server');

var socket = io('http://107.170.231.24:1337');

function edisonconnect(data){
  // console.log(date.name);
  // console.log(JSON.stringify(data));
  socket.emit('realsense_signal',data);
}