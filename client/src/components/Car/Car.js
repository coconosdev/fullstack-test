import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CarsService } from '../../services/cars.service';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/**
 * A component that displays car details.
 */
export const Car = () => {
  let { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  /**
   * Fetches car details using the CarsService.
   */
  const fetchCar = () => {
    const carsService = new CarsService();
    carsService.getCar(id).then((res) => {
      setCar(res);
    });
  };

  if (!car) return 'Loading';

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <h1>Car</h1>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Make"
              label="Make"
              fullWidth
              disabled
              variant="standard"
              value={car.make}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Model"
              label="Model"
              fullWidth
              disabled
              variant="standard"
              value={car.model}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Package"
              label="Package"
              fullWidth
              disabled
              variant="standard"
              value={car.package}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Color"
              label="Color"
              fullWidth
              disabled
              variant="standard"
              value={car.color}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Year"
              label="Year"
              fullWidth
              disabled
              variant="standard"
              value={car.year}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Category"
              label="Category"
              fullWidth
              disabled
              variant="standard"
              value={car.category}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Mileage (miles)"
              label="Mileage (miles)"
              fullWidth
              disabled
              variant="standard"
              value={car.mileage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Price"
              label="Price"
              fullWidth
              disabled
              variant="standard"
              value={`$${car.price / 100}`}
            />
          </Grid>
        </Grid>
      </Paper>
      <Link to={'/'}>
        <Button variant="outlined">Go back</Button>
      </Link>
    </Container>
  );
};
