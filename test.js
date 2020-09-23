const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    //host: '192.168.0.139',
    host: '10.0.2.15',
    // port: 50542
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();