const express = require('express');
const {connectDB} = require('./config/db');  
require('dotenv').config();

const app = express();

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/users', require('./router/user.routes'));
app.use('/api/videos', require('./router/video.routes'));
app.use('/api/live-streams', require('./router/liveStream.routes'));
app.use('/api/comments', require('./router/comment.routes'));
app.use('/api/subscriptions', require('./router/subscription.routes'));



if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


module.exports = app;
