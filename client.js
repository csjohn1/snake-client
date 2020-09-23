const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    //host: '10.0.2.15',
    port: 50542
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