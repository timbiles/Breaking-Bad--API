const getQuotes = (req, res) => {
    const db = req.app.get('db');

  db.quotesr.get_quotes()
    .then(response => {
        console.log(response)
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
}


module.exports = {
    getQuotes
}