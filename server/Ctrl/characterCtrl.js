const {all} = require('../Data/characters')

const getPeople = (req, res) => {
  const db = req.app.get('db');
  const { limit, offset } = req.query;

  db.characters
    .get_characters()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
  // res.status(200).json(characters)
};

const getPeopleById = (req, res) => {
  const db = req.app.get('db');

  db.characters
    .get_char_by_id([req.params.id])
    .then(resp => {
      console.log(resp);
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

const getAll = (req,res) => {
  res.status(200).json(all)
  
}

module.exports = {
  getPeople,
  getPeopleById,
  getRandomChar,
  getAll
};
