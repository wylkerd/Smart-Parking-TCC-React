import React from 'react';

import socketClient from 'socket.io-client';
const SERVER = 'http://127.0.0.1:8888';

export function CardStatus() {
  const socket = socketClient(SERVER);
  socket.on('status', () => {
    console.log(`I'm connected with the back-end`);
  });
  return (
    <>
    </>
  );
}
