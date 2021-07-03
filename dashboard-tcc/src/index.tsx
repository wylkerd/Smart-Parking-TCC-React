import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/tailwind.css';

// const http = require('http');
// const express = require('express');

// const app = express();
// const server = http.createServer(app);
// export const io = require('socket.io')(server);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement,
);

// app.use(express.static(__dirname + '/public'));
// server.listen(3000, () => console.log('server on port 3000'));

// const SerialPort = require('serialport');
// const ReadLine = SerialPort.parsers.Readline;

// const port = new SerialPort('COM4', {
//   baudRate: 9600,
// });
// const parser = port.pipe(new ReadLine({delimiter: '\r\n'}));

// parser.on('open', function() {
//   console.log('connection is opened');
// });

// let condition = new Array(7);
// let guard = 0;
// parser.on('data', function(data) {
//   for (let index = 0; index < 1; index++) {
//     condition[guard] = data;
//     index++;
//     guard++;
//     if (guard == 7) {
//       guard = 0;
//     }
//   }

//   if (condition.length == 7) {
//     io.emit('status', condition);
//     console.log(condition);
//     condition = [];
//   }
// });

// parser.on('error', (err) => console.log(err));
// port.on('error', (err) => console.log(err));


