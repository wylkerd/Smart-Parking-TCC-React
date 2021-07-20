import React, {useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:8888';

function CardStatus() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(response);
    }, 1000);
    return () => clearInterval(interval);
  }, [response]);

  return (
    <p>
      {`${response}`}
    </p>
  );
}

export default CardStatus;
