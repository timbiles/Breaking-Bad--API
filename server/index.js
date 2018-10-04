// require('dotenv').config()
// const express = require("express");
// const bodyParser = require("body-parser");
// const massive = require('massive');

// const port = process.env.SERVER_PORT || 3001;

// const {getPeople} = require('./Ctrl/characterCtrl');

// const app = express();
// app.use(bodyParser.json());

// massive(process.env.CONNECTION_STRING)
//   .then(db => {
//     app.set('db', db);
//   })
//   .catch(err => {
//     console.log('Database connection error', err);
//   });

// app.get('/api/characters', getPeople)

// app.listen(port, () => {
//     console.log(`Listening on port: ${port}`)
// })

// ------------ REVIEW ---------------

// express is server framework built on node, makes it easy to listen to http requests.
const express = require('express');
//bodyParser is a package that puts the request's body on the req.body object.
const bodyParser = require('body-parser');

const port = 3001;

const { getPeople, getQuote } = require('./Ctrl/characterCtrl');

//app is express invoked. The .get .post .put .patch .delete .listen methods can be accessed from app.
const app = express();
//memorize this. this is how to make bodyParser do its job.
app.use(bodyParser.json());

app.get('/api/characters', getPeople);
app.get('/api/quote', getQuote);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
