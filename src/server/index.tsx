var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    port = 8888;

//Server start
server.listen(port, () => console.log('Server on port ' + port))

//user server
app.use(express.static(__dirname + '/public'));

io.on('connection', onConnection);

var connectedSocket = null;
function onConnection(socket){
    connectedSocket = socket;
}

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline; 
const usbport = new SerialPort('COM4');  
const parser = usbport.pipe(new Readline({ delimiter: '\r\n' })); 

const condition = new Array(7);
let guard = 0;
parser.on('data', function(data) {
  for (let index = 0; index < 1; index++) {
    condition[guard] = data;
    index++;
    guard++;
    if (guard == 7) {
      guard = 0;
    }
  }

  if (condition.length == 7) {
    io.emit('status', condition);
    console.log(condition);
    this.condition = [];
  }
});

parser.on('error', (err) => console.log(err));
usbport.on('error', (err) => console.log(err));
