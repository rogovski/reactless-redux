import express from 'express';
import http from 'http';
import path from 'path';
import iocons from 'socket.io';

const app = express();
const server = http.Server(app);
const io = iocons(server);


/**
 * use ejs as template engine
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/server/views'));


/**
 * server static content
 */
app.use(express.static('public'));


/**
 * serve index page
 */
app.get('/', (req, res) => {
  res.render('index');
});


/**
 * handle socket connections
 */
io.on('connection', (socket) => {
  console.log('user connected');
});


/**
 * start server
 */
server.listen(8080, () => { console.log('SERVER RUNNING'); });
