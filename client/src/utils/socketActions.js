import socket from "./socket";

const startPolling = () => {
  socket.emit("start");
};

const endPolling = () => {
  socket.disconnect();
};

export { startPolling, endPolling };
