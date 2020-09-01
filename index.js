const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const backend = require('./express');
const http = require("http");
const io = require('socket.io')(http);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', backend);

// lancement du serveur port 8080
app.use(function(req, res, next) {
  var err = new Error ('Not Found');
  err.status = 404;
  next(err);
});

let server = app.listen( process.env.PORT || 3000, function() {
  console.log('Listening on port', server.address().port);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });