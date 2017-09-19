// remember to have required packages at the beginning, then middle wear in the center, and app.listen @ the end 
const express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(express.static('assets'))
app.use(bodyParser.json())

var messages =[];


app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});




app.listen(3000, () => {
  console.log(`Listening on 3000`)
});
