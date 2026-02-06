import http from 'http';
import { readFile } from 'fs/promises';

const fileUrl = new URL('./index.html', import.meta.url);

async function readFileAsync(fileUrl) {
    try {
        const data = await readFile(fileUrl, 'utf8');
        return data;
    } catch (error) {
        console.error('Read error:', error);
        return 'Failed to read file.';
    }
}

const server = http.createServer(async (req, res) => {
    const data = await readFileAsync(fileUrl);
    const isError = data === 'Failed to read file.';
    res.writeHead(isError ? 500 : 200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(data);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
