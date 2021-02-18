const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    try {
        if (req.url == '/favicon.ico') {
            res.setHeader('Content-Type', 'image');
            fs.createReadStream('./public/favicon.ico').pipe(res);
        }
        const body = fs.readFileSync(`./public${req.url}`);
        res.end(body);
    } catch (err) {
        const body = fs.readFileSync(`./public/index.html`);
        res.end(body);
    }
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started! Port ${port}`);