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

let pups = [];

const getPeople = (req, res) => {
  console.log(characters);
  res.status(200).json(characters);
};

const getPup = (req, res) => {
  axios
    .get(`https://dog.ceo/api/breed/corgi/images`)
    .then(resp => {
      pups = resp.data.message.slice(0,10)
      res.status(200).send(pups);
    });
};



module.exports = {
  getPeople,
  getPup
};
