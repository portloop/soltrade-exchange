import { Server as WebSocketServer } from 'ws';
import http from 'http';

export default async function (req, res) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
  });

  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      // console.log('Received:', message);
    });

    ws.send('Hello from WebSocket server!');
  });

  server.listen(3000, () => {
    console.log('WebSocket server is listening on port 3000');
  });
}
