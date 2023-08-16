const model = require('../models/cars.model');

/**
 * Adds a new car to the model.
 *
 */
function addCar(req, res) {
  if (!req.body.make) {
    console.error('Missing car make');
    return res.status(400).json({
      error: 'Missing cars make',
    });
  }

  const newCar = {
    make: req.body.make,
    model: req.body.model,
    package: req.body.package,
    color: req.body.color,
    year: req.body.year,
    category: req.body.category,
    mileage: req.body.mileage,
    price: req.body.price,
    id: model.length,
  };

  model.push(newCar);

  console.log('New car added:', newCar);

  res.json(newCar);
}

/**
 * Gets all cars from the model.
 */
function getCars(req, res) {
  console.log('Getting all cars');
  res.json(model);
}

/**
 * Gets a specific car from the model based on its ID.
 */
function getCar(req, res) {
  const carId = Number(req.params.id);
  const car = model.find((car) => car.id === carId);
  if (car) {
    console.log('Getting car with ID:', carId);
    res.status(200).json(car);
  } else {
    console.log('Car not found with ID:', carId);
    res.status(404).json({
      error: 'A car could not be found with the provided id',
    });
  }
}

module.exports = {
  addCar,
  getCars,
  getCar,
};
