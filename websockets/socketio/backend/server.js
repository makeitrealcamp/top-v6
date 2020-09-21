const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app);
const io = socketIO(server)

io.on('connection', socket => {
  socket.emit('loquesea', { message: 'hola mundo' })
  console.log('connected')

  socket.on('message', data => {
    // io.emit('message', data)
    console.log(data)
    io.to('some room').emit('private', 'hola private')
  })

  socket.on('join room', data => {
    console.log('joined')
    socket.join('some room')
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})

server.listen(8000, () => console.log('server running'))

