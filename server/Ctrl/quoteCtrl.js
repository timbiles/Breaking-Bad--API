const getQuotes = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_quotes()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
  db.count.counter(3);
};

const getQuoteById = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_quote_by_id([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  db.count.counter(3);
};

const getRandomQuote = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_random_quote()
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  db.count.counter(3);
};

const getQuoteByAuthor = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_quotes_from_author([req.query.author])
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  db.count.counter(3);
};

module.exports = {
  getQuotes,
  getQuoteById,
  getRandomQuote,
  getQuoteByAuthor
};
