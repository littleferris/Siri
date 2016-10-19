
var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

const getRandomMessage = function() {
   return messages[Math.floor(Math.random() * messages.length)];
};
const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.listen(8887, () => {
  console.log('Listening on port 8887');
});

app.use(bodyParser.json());

// app.get('/', function(reg, res) {
//   res.send(JSON.stringify({
//     message: getRandomMessage()
//   }))
// });

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});
