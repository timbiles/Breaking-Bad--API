require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  path = require('path'),
  rateLimit = require('express-rate-limit'),
  cors = require('cors'),
  routes = require('./routes'),
  port = process.env.SERVER_PORT || 3002;

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

routes(app);

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
