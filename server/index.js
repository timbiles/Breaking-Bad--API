const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.SERVER_PORT || 3001;

const {getPeople} = require('./Ctrl/characterCtrl');

const app = express();
app.use(bodyParser.json());

app.get('/api/characters', getPeople)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})