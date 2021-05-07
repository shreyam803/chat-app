const http = require('http');

const express = require('express');

const socketio = require("socket.io");

const path = require('path');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDiretorypath = path.join(__dirname, '../public');

app.use(express.static(publicDiretorypath));

io.on('connection',()=>{
    console.log("New Websocket Connection.")
})

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

