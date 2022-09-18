const say = require('say');
const express = require('express');
const http = require('http');

const host = 'localhost';
const port = 8000;

const app = express();

export function test() { 
    const requestListener = function (req, res) {
        res.writeHead(200);
        res.end(say.speak('piece of shit', 'Samantha', 1))
    }

    const server = http.createServer(requestListener);
        server.listen(port, host, () => {
            console.log(`Server running on ${host}:${port}`)
    })
}
test()