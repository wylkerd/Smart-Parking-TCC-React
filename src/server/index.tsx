const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
server.listen(3000, () => console.log('server on port 3000'));

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("COM4", {
    baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
    console.log('connection is opened');
});

const condition = new Array(7);
var guard = 0;
parser.on('data', function (data) {

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
port.on('error', (err) => console.log(err));
