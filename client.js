const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    //host: '10.0.2.15',
    port: PORT
    //port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('connected to server');
    conn.write('Name: CSJ');
    // conn.write('Move: up');

  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}


module.exports = connect;