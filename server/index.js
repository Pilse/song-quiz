const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const http = require("http");

const Rooms = require("./model/Rooms");

const app = express();
const server = http.createServer(app);

const rooms = new Rooms();

app.use(cors());

const io = socket(server);

io.on("connection", (socket) => {
  console.log("connect", socket.id);

  // join

  // create

  // leave

  // play

  // message

  socket.on("disconnect", (msg) => {
    console.log("disconnect", msg);
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Listening on port ${port}`));
