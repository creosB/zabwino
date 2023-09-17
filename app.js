const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();
const {
  addUser,
  removeUser,
  findConnectedUser,
} = require('./controllers/chatRoom');
const {
  loadMessages,
  sendMsg,
  deleteMsg,
} = require('./controllers/chatMessages');

// app
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//socket.io
io.on('connection', (socket) => {
  socket.on('join', async ({ userId }) => {
    const users = await addUser(userId, socket.id);
    //console.log(users);

    setInterval(() => {
      socket.emit('connectedUsers', {
        users: users.filter((user) => user.userId !== userId),
      });
    }, 10000);
  });

  socket.on('loadMessages', async ({ userId, messagesWith }) => {
    const { chat, error } = await loadMessages(userId, messagesWith);

    !error
      ? socket.emit('messagesLoaded', { chat })
      : socket.emit('noChatFound');
  });

  socket.on('sendNewMsg', async ({ userId, msgSendToUserId, msg }) => {
    const { newMsg, error } = await sendMsg(userId, msgSendToUserId, msg);

    const receiverSocket = findConnectedUser(msgSendToUserId);

    if (receiverSocket) {
      // SEND MESSAGE TO A PARTICULAR SOCKET
      io.to(receiverSocket.socketId).emit('newMsgReceived', { newMsg });
    } else {
      socket.emit('setMsgToUnread', { msgSendToUserId });
    }

    !error && socket.emit('msgSent', { newMsg });
  });

  socket.on('deleteMsg', async ({ userId, messagesWith, messageId }) => {
    const { success } = await deleteMsg(userId, messagesWith, messageId);

    if (success) socket.emit('msgDeleted');
  });

  socket.on('disconnectUser', () => removeUser(socket.id));
});

//image directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

// Route middleware
fs.readdirSync('./routes').map((routes) =>
  app.use('/api', require(`./routes/${routes}`))
);

// ... other server configuration

if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, 'client', 'build');
  
  // Serve static files from the React build folder
  app.use(express.static(clientBuildPath));

  // Serve the index.html file for all non-api routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}


const port = process.env.PORT || 8000;

server.listen(port, () => {
  //console.log(`Server is running on port ${port}`);
});