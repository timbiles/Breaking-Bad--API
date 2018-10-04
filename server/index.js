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
const cors = require('cors');

const port = 3001;

const { getPeople, getPup } = require('./Ctrl/characterCtrl');

//app is express invoked. The .get .post .put .patch .delete .listen methods can be accessed from app.
const app = express();
//memorize this. this is how to make bodyParser do its job.
app.use(bodyParser.json());
app.use(cors());


/**
 * How the Request / Response Cycle Works
 *
 * The Front-End is the side that makes requests. The Back-End is used to serve those requests, and give back responses.
 *
 * We want to generate a list of music on the react-side (front-end). So on the front-end, they'll make a REQUEST
 * using axios. They will put axios.get('/api/music') . This in turn will 'hit' the corresponding endpoint that we made in the backend,
 *     ex. app.get('/api/music', (req, res) => res.status(200).send(music));
 * Once they have hit the endpoint, we will send a response back containing the status code, and the actual resources.
 *
 * Front end makes a request, back-end will send back a response.
 */

app.get('/api/characters', getPeople);
app.get('/api/puppers', getPup)


//we tell express to actively listen to port 3001.
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
