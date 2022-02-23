// uses the connect function from client.js
const { connect } = require('./client');

// uses the setInput function from input.js
const { setupInput } = require('./input');

//shows the the server is connecting
console.log('Connecting...');

// create a variable conn for connect() to put in setInput();
const conn = connect();

//connects the setInput function from input.js to connect();
setupInput(conn);

