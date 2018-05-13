const WebSocket = require('ws');

const ws = new WebSocket('ws://85.226.196.13:3000');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});
