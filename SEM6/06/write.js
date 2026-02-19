import http from 'http';
import fs from 'fs/promises';

async function writeFileAsync() {
    try {
        await fs.writeFile('myfile.txt','Hello world', 'utf-8');
        const data = {name:'John',age:30};
        await fs.writeFile('data.json',JSON.stringify(data,null,2),'utf-8');
        console.log('File written successfully');
    } catch (error) {
        console.error('Write error:', error);
    }
}
writeFileAsync();