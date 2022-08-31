const handleUserInput = function (key) {
  console.log('key pressed', key)
  if (key === '\u0003') {
    console.log('trying to quit')
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };