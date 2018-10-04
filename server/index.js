require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const massive = require('massive');

const port = process.env.SERVER_PORT || 3001;

const {getPeople} = require('./Ctrl/characterCtrl');
const {getQuotes} = require('./Ctrl/quoteCtrl');
const {getEpisodes} = require('./Ctrl/episodeCtrl');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log('Database connection error', err);
  });

// Character endpoints
app.get('/api/characters', getPeople)

// Quote endpoints
app.get('/api/quotes', getQuotes)

// Episode endpoints
app.get('/api/episodes', getEpisodes)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})