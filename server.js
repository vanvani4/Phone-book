const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const api = require('./server/routes/api');
// const photo = require('./server/photo_person');


app.use(bodyParser.json());//
app.use(bodyParser.urlencoded({extended: false}));//

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, '/server/photo_person')));
app.use('/api', api);
app.use(function (req, res, next) {
  if (req.header('x-forwqrded-proto') == 'http') {
    res.redirect(301, 'https://' + req.url)
    return
  }
  next()
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));//
});

const port = process.env.PORT || '8080';//
app.set('port', port);//

const server = http.createServer(app);//

server.listen(port, () => {
  console.log(`API runnung on localhost:${port}`);//
});
