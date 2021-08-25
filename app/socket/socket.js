module.exports = function socket (socket) {
  socket.broadcast.emit('online')
  
  socket.on('message', (data, recipient) => {
    socket.to(recipient).emit('message', data)
  })

  socket.on('typing', (recipient) => {
    socket.to(recipient).emit('typing')
  })
}