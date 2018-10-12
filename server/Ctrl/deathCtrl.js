const getDeaths = (req, res) => {
  const db = req.app.get('db');

  db.death.get_deaths().then(response => {


    response.map(e=> {
      if(e.number_of_deaths === null) e.number_of_deaths = 1
    })

    res.status(200).send(response)
  })
  .catch(err=> {
      console.log('err', err)
      res.status(500).send(err)
  })
};

const getDeathTotal = (req, res) => {
  const db = req.app.get('db');
  const { name } = req.query
  const newName = `%${name}%`
  let deaths = [];

  db.death.get_death_total(newName)
  .then(response => {
  deaths = {name, deathCount: +response[0].sum}
    res.status(200).send(deaths)
  })
  .catch(err=> {
    console.log(err)
    res.status(500).send(err)
  })
}

module.exports = {
  getDeaths,
  getDeathTotal
};
