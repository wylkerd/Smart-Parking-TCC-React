const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
server.listen(3000, () => console.log('server on port 3000'));

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("COM3", {
    baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
    console.log('connection is opened');
});

parser.on('data', function (data) {
    console.log(data);
    io.emit('status', data);
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));
