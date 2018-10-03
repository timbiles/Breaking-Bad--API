const {characters} = require('../Data/characters')

const getPeople = (req, res) => {
    res.status(200).json(characters)
}

module.exports = {
    getPeople
}