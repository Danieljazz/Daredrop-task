import express from "express";
import http from "http";
import { Server } from "socket.io";
import streamersRoutes from "./routes/streamers.js";
const app = express();
const httpServer = http.createServer(app);
const socketServer = new Server(httpServer, {
  cors: {
    credentials: true,
    origin: "*",
  },
});

app.use(express.json());
//app.use(cookieParser());
app.use("/api/v1/streamers", streamersRoutes);

socketServer.on("connection", (socket) => {
  console.log("new user added");
  socket.emit("hi", new Date());
});

httpServer.listen(8080, () => {
  console.log("Server runing on port 8080");
});
