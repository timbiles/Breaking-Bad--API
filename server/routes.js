const {
  getPeople,
  getPeopleById,
  getRandomChar,
  getHomePage,
  getAll,
  getEverything,
  getPeopleFooter
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

module.exports = app => {
  //counter
  app.use('/', (req, res, next) => {
    const db = req.app.get('db').count;

    req.originalUrl.includes('home-page')
      ? db.counter(5)
      : req.originalUrl.includes('character')
      ? db.counter(1)
      : req.originalUrl.includes('episode')
      ? db.counter(2)
      : req.originalUrl.includes('quote')
      ? db.counter(3)
      : req.originalUrl.includes('death')
      ? db.counter(4)
      : null;
    next();
  });

  // Character endpoints
  app.get('/api/characters', getPeople);
  app.get('/api/characters/:id', getPeopleById);
  app.get('/api/character/random', getRandomChar);
  app.get('/api/home-page-characters', getHomePage);
  app.get('/api/footer-char-info', getPeopleFooter);

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
  app.get('/api/complete', getEverything);
};
