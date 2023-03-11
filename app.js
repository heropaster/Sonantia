const say = require('say');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

let urlencodedParser = bodyParser.urlencoded({extended: false});


const host = 'localhost';
const port = 8000;

const app = express();
//static
app.use('/frontend', express.static(__dirname + '/frontend'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'))

//APP GETS
app.get('', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('', (req, res)=>{
    res.sendFile(__dirname + '/frontend/index.js');
});

app.get('', (req, res)=>{
    res.sendFile(__dirname + '/css/style.css');
});

//LISTEN
app.listen(port, () => {
    console.log(`Server is loaded on ${host}:${port}`)
});


//app join
app.post('/voice', urlencodedParser, function(req, res) {
    console.log(req.body);
    say.speak(req.body.word)
})