export class CarsService {
  baseUrl = 'http://localhost:4000';
  baseEndpoint = '/cars';

  async addCar(carObject) {
    try {
      const res = await fetch(this.baseUrl + this.baseEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carObject),
      });
      const cars = res.json();
      return cars;
    } catch (error) {
      return {
        error: 500,
        message: 'Massive error:' + error,
      };
    }
  }

  async getCars() {
    try {
      const res = await fetch(this.baseUrl + this.baseEndpoint);
      const cars = res.json();
      return cars;
    } catch (error) {
      return {
        error: 500,
        message: 'Massive error:' + error,
      };
    }
  }

  async getCar(carId) {
    try {
      const res = await fetch(this.baseUrl + this.baseEndpoint + `/${carId}`);
      const cars = res.json();
      return cars;
    } catch (error) {
      return {
        error: 500,
        message: 'Massive error:' + error,
      };
    }
  }
}
