const getDeaths = (req, res) => {
  const db = req.app.get('db');

  db.death
    .get_deaths()
    .then(response => {
      response.map(e => {
        if (e.number_of_deaths === null) e.number_of_deaths = 1;
      });

      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getDeathTotal = (req, res) => {
  const db = req.app.get('db');
  const { name } = req.query;
  const newName = name ? `%${name}%` : '%%';
  let deaths = [];

  // upper or lower case name option


  db.death
    .get_death_total(newName)
    .then(response => {
      deaths = [{ name, deathCount: +response[0].sum }];
      res.status(200).send(deaths);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getRandomDeath = (req, res) => {
  const db = req.app.get('db');

  db.death
    .get_random_death()
    .then(response => {
      const app = response[0].appearance.split(',').map(e => +e);
      const occ = response[0].occupation.split(',');

      newResponse = {
        death_id: response[0].death_id,
        death: response[0].death,
        cause: response[0].cause,
        responsible: response[0].responsible,
        last_words: response[0].last_words,
        season: response[0].season,
        episode: response[0].episode,
        occupation: occ,
        img: response[0].img,
        nickname: response[0].nickname,
        appearance: app
      };
      res.status(200).send(newResponse);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  getDeaths,
  getDeathTotal,
  getRandomDeath
};
