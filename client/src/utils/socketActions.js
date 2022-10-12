import socket from "./socket";

const startPolling = () => {
  socket.emit("start");
};

const endPolling = () => {
  socket.emit("terminate");
};

export { startPolling, endPolling };
