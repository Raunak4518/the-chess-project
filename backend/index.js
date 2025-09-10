import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import AgainstBot from './controllers/AgainstBot.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// io.use((socket, next) => {
//     const token = socket.handshake.auth.token;
//     jwt.verify(token, "SECRET", (err, decoded) => {
//         if (err) return next(new Error("Unauthorized"));
//         socket.user = decoded;
//         next();
//     });
// });


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('hello', 'world');

});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});



io.on('message', (socket) => {
  console.log();
  io.emit("hello")

});

app.use("/bot",AgainstBot);