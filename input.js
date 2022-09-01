let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  console.log('key pressed', key)
  if (key === '\u0003') {
    //console.log('trying to quit')
    process.exit();
  };

  if (key === 'w') {
    connection.write("Move: up");
  };

  if (key === 'a') {
    connection.write("Move: left");
  };

  if (key === 's') {
    connection.write("Move: down");
  };

  if (key === 'd') {
    connection.write("Move: right");
  };

  if (key === 'p') {
    connection.write("Say: hi!");
  };

};

module.exports = { setupInput };