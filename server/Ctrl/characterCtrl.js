const { all } = require('../Data/characters');
const allCharacters = [];
const occ = [];
const app = [];
const aMap = arr => {
  return arr.map(el => +el);
};

const moment = require('moment');

const getPeople = (req, res) => {
  const db = req.app.get('db');
  const { limit, name, offset } = req.query;

  !name
    ? db.characters.get_characters().then(response => {
        response.map((e, i) => {
          e.occupation && occ.push(e.occupation.split(','));
          app.push(e.appearance.split(','));

          e.occupation = occ[i];
          e.appearance = aMap(app[i]);
          e.birthday =
            e.birthday === null
              ? 'Unknown'
              : moment(e.birthday, 'MM-DD-YYYY').format('MM-DD-YYYY');
        });

        res
          .status(200)
          .send(
            limit || offset ? response.splice(offset || 0, limit) : response
          );
      })
    : db.characters.get_char_by_name([name]).then(response => {
        response.map((e, i) => {
          e.occupation && occ.push(e.occupation.split(','));
          app.push(e.appearance.split(','));

          e.occupation = occ[i];
          e.appearance = aMap(app[i]);
          e.birthday =
            e.birthday === null
              ? 'Unknown'
              : moment(e.birthday).format('MM-DD-YYYY');
        });
        res.status(200).send(response);
      });

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
  const { limit } = req.query;
  const o = [];
  const a = [];

  db.characters
    .get_random_char([limit || 1])
    .then(resp => {
      resp.map((e, i) => {
        e.occupation && o.push(e.occupation.split(','));
        a.push(e.appearance.split(','));

        e.occupation = o[i];
        e.appearance = aMap(a[i]);
      });
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
