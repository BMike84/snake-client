const net = require('net');

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.37.229.92',
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('make a move');
  })

  return conn;
};

console.log('Connecting...');
connect();

