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

let message = "welcome!";

io.on('connection',(socket)=>{
    console.log("New Websocket Connection.")

    socket.emit("message",message)

    socket.on('sendMessage',(message)=>{
        io.emit('message',message);
    })
    
})

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

