require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const routes = require('./routes')
const port = process.env.SERVER_PORT || 3002;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log('Database connection error', err);
  });

const limiter = rateLimit({
  windowMs: 1000 * 60 * 60 * 24,
  max: 1000,
  message: 'Too many hits. Try again in 24 hours.'
});

app.use(limiter);
app.use('*', (req,res) => {
  req.app.get('db').count.counter(1)
})

routes(app)

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
