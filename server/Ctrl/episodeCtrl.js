const getEpisodes = (req,res) => {
    const db = req.app.get('db')

    db.episodes.get_episodes()
    .then(resp=> {
        res.status(200).send(resp)
    })
    .catch(err=> {
        res.status(500).send('Episode err >>>', err)
    })
}

module.exports = {
    getEpisodes
}