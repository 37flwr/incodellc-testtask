const startPolling = (socket) => {
    socket.emit('start')
}

export {startPolling}