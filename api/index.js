import express from "express";
import http from "http";
import { Server } from "socket.io";
import streamersRoutes from "./routes/streamers.js";
import cors from "cors";

const app = express();
const httpServer = http.createServer(app);
const corsOrigin = ["http://localhost:5173", "http://127.0.0.1:5173"];
const serverPort = 8080;
const socketServer = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
  },
});

app.use(express.json());
app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": corsOrigin,
  });
  next();
});
app.use(
  cors({
    origin: corsOrigin,
  })
);
app.use("/api/v1/streamers", streamersRoutes);

socketServer.on("connection", (socket) => {
  console.log("new user added");
  socket.on("db_update", () => {
    console.log("DB update", new Date());
    socketServer.emit("db_update_response", "New data waiting to fetch");
  });
});

httpServer.listen(serverPort, () => {
  console.log(`Server runing on port ${serverPort}`);
});
