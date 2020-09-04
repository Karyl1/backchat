const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const backend = require('./express');
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const socket= require('socket.io');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', backend);
app.use(express.static('/bower_components'));

// lancement du serveur port 8080
app.use(function(req, res, next) {
  var err = new Error ('Not Found');
  err.status = 404;
  next(err);
});

server.listen( process.env.PORT || 3000, function() {
  console.log('Listening on port', server.address().port);
});

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  })
});


module.exports = app; 
//   httpServer.listen(3000, () => {
//   console.log('go to http://localhost:3000');
// });