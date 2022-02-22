//setup interface to handle user input from stdin
const { connect } = require("./client");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }
  
  if (key === 'a') {
    connection.write('Move: left');
  }
  
  if (key === 's') {
    connection.write('Move: down');
  }
  
  if (key === 'd') {
    connection.write('Move: right');
  }
  
  if (key === '1') {
    connection.write('Say: Best of Luck');
  }
  
  if (key === '2') {
    connection.write('Say: Hi');
  }
  
};

//export
module.exports = { setupInput };