const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();

const server = http.createServer(app); //create http server using express

app.use(cors());

const io = Server(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET"], //what kind of methods you are expecting
  },
}); //set up everything on the backend using this variable

server.listen(3000, () => {
  console.log("server listening");
});
