const express = require('express');
var cors = require('cors');

const carsRouter = require('./routes/cars.routes');
const app = express();

const PORT = 4000;

app.use(cors());

app.use(express.json());

app.use('/cars', carsRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
