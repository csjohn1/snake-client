// Stores the active TCP connection object.
let connection;
let moveDirection;
// const setupInput = function(conn) {
//   connection = conn;
// }

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(data) {
    if (data === '\u0003') {
      console.log('goodbye');
      process.exit();
    }
    if (data === 'q') {
      connection.write("Say: ello");
    }
    let direction = '';
    const directionStr = 'wasd';
    if(directionStr.includes(data)) {
      clearInterval(moveDirection);
      switch (data) {
        case 'w': direction = 'up'; break;
        case 'a': direction = 'left'; break;
        case 's': direction = 'down'; break;
        case 'd': direction = 'right'; break;        
        default: break;
      }
      moveDirection = setInterval(() => connection.write(`Move: ${direction}`), 50);
    }
};
  
module.exports = setupInput;
 
// A	LATIN CAPITAL LETTER A (U+0041)
// S	LATIN CAPITAL LETTER S (U+0053)
// D	LATIN CAPITAL LETTER D (U+0044)