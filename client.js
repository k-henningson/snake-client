const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write("Name: KMH");
  });

  // conn.on("connect", () => {
  //   setTimeout( () => {
  //     conn.write();
  //   }, 1000);
  // });

  // conn.on("connect", () => {
  //   setTimeout( () => {
  //     conn.write("Move: left");
  //   }, 2000);
  // });

  // conn.on("connect", () => {
  //   setTimeout( () => {
  //     conn.write("Move: down");
  //   }, 3000);
  // });

  // conn.on("connect", () => {
  //   setTimeout( () => {
  //     conn.write("Move: right");
  //   }, 4000);
  // });

  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };