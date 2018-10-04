// // const {characters} = require('../Data/characters')

// const getPeople = (req, res) => {
//     const db = req.app.get('db');

//   db.get_characters()
//     .then(response => {
//         console.log(response)
//       res.status(200).send(response);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//       console.log(`Something went wrong!`);
//     });
//     // res.status(200).json(characters)
// }

// module.exports = {
//     getPeople
// }

// ------------------------
const axios = require('axios');
const { characters } = require('../Data/characters');

const getPeople = (req, res) => {
  // console.log(characters);
  res.status(200).json(characters);
};

const getQuote = (req, res) => {
  axios
    .get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
    .then(resp => {
      console.log(resp.data)
      res.status(200).send(resp.data);
    });
};

module.exports = {
  getPeople,
  getQuote
};
