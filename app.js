const express = require('express')
const socket = require('socket.io')

const PORT = 5000

const app = express()

const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

const io = new socket.Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", function (socket) {
    console.log("A new socket has joined: " + socket.id)

    socket.on("hello", function (data) {
        console.log(data);
    })
})