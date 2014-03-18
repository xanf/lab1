var server = require('net').createServer(function (socket) {
  socket.on('data', processData.bind(socket));
  socket.on('error', processError.bind(socket));
});


function processError () {
  console.log('error');
}

function parseData (data) {
  //your code goes here
}

function processData (data) {
  //your code goes here
  console.log(data.toString());
  this.end('test');
}

server.listen(8080);

