module.exports = function socket (socket) {
  socket.broadcast.emit('online')
  
  socket.on('message', (data) => {
    socket.broadcast.emit('message', data)
  })

  socket.on('typing', () => {
    socket.broadcast.emit('typing')
  })
}