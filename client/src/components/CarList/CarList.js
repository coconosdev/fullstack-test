import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CarCard } from '../CarCard/CarCard';

/**
 * A component that displays a list of car cards.
 *
 * @component
 * @param {Array} {cars} - An array of car objects to be displayed.
 */
export const CartList = ({ cars }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <h1>Cars</h1>
      <Grid container spacing={4}>
        {cars.length > 0 &&
          cars.map((car) => {
            return <CarCard car={car} key={car.id} />;
          })}
      </Grid>
    </Container>
  );
};
