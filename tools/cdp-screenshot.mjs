import fs from 'node:fs';

const endpoint = process.argv[2] || 'http://127.0.0.1:9223';
const outputPath = process.argv[3] || 'raw/verify-live.png';

const tabs = await fetch(`${endpoint}/json/list`).then((res) => res.json());
const page = tabs.find((tab) => tab.type === 'page');
if (!page) {
  throw new Error('No page target found');
}

const socket = new WebSocket(page.webSocketDebuggerUrl);
let nextId = 1;
const pending = new Map();

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
});

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

function send(method, params = {}) {
  const id = nextId++;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve) => pending.set(id, resolve));
}

await send('Page.enable');
const result = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(outputPath, Buffer.from(result.result.data, 'base64'));
socket.close();
