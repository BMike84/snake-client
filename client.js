const net = require('net');
const { IP, PORT } = require('./constant');

// //establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  //giving data to the server side
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: MAB');
  });
  
  //get data from the server side
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };
