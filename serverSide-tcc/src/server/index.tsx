var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({ origin: '*' }));

// Settings for CORS
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});
var port =  process.env.PORT || 8888;
var server = app.listen(port, () => console.log(`Listening on port ${port}`));

// CORS configuration for socket
var io = require('socket.io')(server, {
  log: false,
  agent: false,
  cors:{
    origin: "*",
    methods: ["GET", "POST"]
  },
  origins: 'Access-Control-Allow-Origin:*',
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
});

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
    io.emit('FromAPI', condition);
    console.log(condition);
    this.condition = [];
  }
});

parser.on('error', (err) => console.log(err));
usbport.on('error', (err) => console.log(err));
