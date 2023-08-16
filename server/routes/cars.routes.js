const express = require('express');

const carsController = require('../controllers/cars.controller');

const carsRouter = express.Router();

carsRouter.post('/', carsController.addCar);
carsRouter.get('/', carsController.getCars);
carsRouter.get('/:id', carsController.getCar);

module.exports = carsRouter;
