const net = require('net');

// //establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.45',
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  //giving data to the server side
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: MAB');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: left');
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 500); 
  // });
  
  //get data from the server side
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect;
