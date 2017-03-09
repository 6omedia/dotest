var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Yeah it fuckin workin!')
})

app.listen(3000, function () {
  console.log('Magic is happening on port 3000!');
})