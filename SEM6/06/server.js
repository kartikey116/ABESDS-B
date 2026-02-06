import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.statusCode(500);
                res.end('Error loading file');
                return;
            }
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    } else if(req.url === '/style.css'){
        fs.readFile('style.css',(err,data)=>{
            if(err){
                res.statusCode(500);
                res.end('Error loading file');
                return;
            }
            res.setHeader('Content-Type','text/css');
            res.end(data);
        })
    } else{
        res.statusCode(404);
        res.end('Not Found');
    }
})

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
})