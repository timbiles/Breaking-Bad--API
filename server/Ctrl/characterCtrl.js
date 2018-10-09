const { all } = require('../Data/characters');
const allCharacters = []
const occ = []

const getPeople = (req, res) => {
  const db = req.app.get('db');
  const { limit, name, offset } = req.query;

  !name  
  ? db.characters
    .get_characters()
    .then(response => {

      response.map(e=> {
        e.occupation && occ.push(e.occupation.split(','))
      })

      response.map((e, i)=> {
          return e.occupation = occ[i]
      })

      res.status(200).send(limit || offset ? response.slice(offset || 0, limit) : response)
    })
    : db.characters
      .get_char_by_name([name])
      .then(response => {
        res.status(200).send(response)
      })
};

const getPeopleById = (req, res) => {
  const db = req.app.get('db');
  const { id } = req.params;

  db.characters
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
