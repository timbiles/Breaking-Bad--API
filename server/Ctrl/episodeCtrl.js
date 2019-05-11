const getEpisodes = (req, res) => {
  const db = req.app.get('db');

  db.episodes
    .get_episodes()
    .then(resp => {
      resp.map(e => {
        const char =
          e.characters && e.characters.split(',').map(e => e.trim(''));
        e.characters = char;
      });
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send('Episode err >>>', err);
    });
};

const getEpisodesById = (req, res) => {
  const db = req.app.get('db');

  db.episodes
    .get_episodes_by_id([req.params.id])
    .then(resp => {
      resp.map(e => {
        const char =
          e.characters && e.characters.split(',').map(e => e.trim(''));
        e.characters = char;
      });
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  getEpisodes,
  getEpisodesById
};
