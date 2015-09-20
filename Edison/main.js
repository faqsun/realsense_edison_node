/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
A simple node.js application intended to write data to Digital pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/


var mraa  = require("mraa");

var pins2 = new mraa.Gpio(2);
	pins2.dir(mraa.DIR_OUT);
    
var pins8 = new mraa.Gpio(8);
	pins8.dir(mraa.DIR_OUT);
    
var socket = require('socket.io-client')('http://107.170.231.24:1337');

socket.on('connect', function(){
  console.log('i am connected');
});

socket.on('realsense_signal', function(data){
  console.log('Hand Signal: ' + data.name);
  if(data.name=='spreadfingers'){
	pins2.write(1);
	pins8.write(1);
  } else {
	pins2.write(0);
	pins8.write(0);
  }
});

socket.on('disconnect', function(){
  console.log('i am not connected');
});
