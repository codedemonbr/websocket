import { io } from "./http";

io.on("connection", (socket) => {
    console.log("a user connected >>> ", socket.id);
});
