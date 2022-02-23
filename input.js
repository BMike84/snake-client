let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  //will move the snake up
  if (key === 'w') {
    connection.write('Move: up');
  }
  //will move the snake left
  if (key === 'a') {
    connection.write('Move: left');
  }
  //will move the snake down
  if (key === 's') {
    connection.write('Move: down');
  }
  //will move the snake right
  if (key === 'd') {
    connection.write('Move: right');
  }
  //next two are for text to greet competitor
  if (key === '1') {
    connection.write('Say: Best of Luck');
  }
  
  if (key === '2') {
    connection.write('Say: Hi');
  }
  
};

module.exports = { setupInput };