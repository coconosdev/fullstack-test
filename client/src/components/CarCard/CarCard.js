import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/**
 * A component to display a card representing a car.
 *
 * @param {Object} car - The car object to be displayed.
 */
export const CarCard = ({ car }) => {
  return (
    <Grid item key={car.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            pt: '56.25%',
          }}
          image="https://source.unsplash.com/random?wallpapers"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {car.make}
          </Typography>
          <Typography>{car.model}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/cars/${car.id}`}>
            <Button size="small">View Details</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
