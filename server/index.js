require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const port = process.env.SERVER_PORT || 3002;

const {
  getPeople,
  getPeopleById,
  getRandomChar,
  getAll
} = require('./Ctrl/characterCtrl');
const {
  getQuotes,
  getQuoteById,
  getRandomQuote,
  getQuoteByAuthor
} = require('./Ctrl/quoteCtrl');
const { getEpisodes, getEpisodesById } = require('./Ctrl/episodeCtrl');
const {
  getDeaths,
  getDeathTotal,
  getRandomDeath
} = require('./Ctrl/deathCtrl');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log('Database connection error', err);
  });

const limiter = rateLimit({
  windowMs: 1000 * 60 * 60 * 24,
  max: 1000,
  message: 'Too many hits. Try again in 24 hours.'
});

app.use(limiter);

// Character endpoints
app.get('/api/characters', getPeople);
app.get('/api/characters/:id', getPeopleById);
app.get('/api/character/random', getRandomChar);

// Quote endpoints
app.get('/api/quotes', getQuotes);
app.get('/api/quotes/:id', getQuoteById);
app.get('/api/quote/random', getRandomQuote);
app.get('/api/quote', getQuoteByAuthor);

// Episode endpoints
app.get('/api/episodes', getEpisodes);
app.get('/api/episodes/:id', getEpisodesById);

// Death count
app.get('/api/deaths', getDeaths);
app.get('/api/death-count', getDeathTotal);
app.get('/api/random-death', getRandomDeath);

app.get('/api', getAll);

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
