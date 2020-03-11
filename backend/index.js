const express = require('express');
const path = require('path');
const musicApi = require('./routes/music-api');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../build')))

app.use('/api', musicApi)

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT)