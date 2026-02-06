import http from 'http';
import { readFile } from 'fs/promises';

const fileUrl = new URL('./index.html', import.meta.url);

const server = http.createServer(async (req, res) => {
  try {
    const data = await readFile(fileUrl, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error('Read error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Failed to read file.');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
