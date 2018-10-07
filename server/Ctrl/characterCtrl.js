const { all } = require('../Data/characters');

const getPeople = (req, res) => {
  const db = req.app.get('db');
  const { limit, offset } = req.query;

  db.characters
    .get_characters()
    .then(response => {
      res
        .status(200)
        .send(limit || offset ? response.slice(offset || 0, limit) : response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getPeopleById = (req, res) => {
  const db = req.app.get('db');
  const { id } = req.params;

  console.log(id.match(/[a-z]/) ? true : false);
  // console.log(typeof +id === 'number')
  id.match(/[a-z]/)
    ? db.characters
        .get_char_by_name([id])
        .then(resp => {
          res.status(200).send(resp);
        })
        .catch(err => {
          res.status(500).send(err);
        })
    : db.characters
        .get_char_by_id([id])
        .then(resp => {
          res.status(200).send(resp);
        })
        .catch(err => {
          res.status(500).send(err);
        });
};

const getRandomChar = (req, res) => {
  const db = req.app.get('db');

  db.characters
    .get_random_char()
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getCharLimit = (req, res) => {
  const db = req.app.get('db');

  db.characters
    .get_char_limit([limit, offset])
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  res.status(200).json(all);
};

module.exports = {
  getPeople,
  getPeopleById,
  getRandomChar,
  getAll
};
