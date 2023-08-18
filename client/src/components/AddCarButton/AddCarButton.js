import Button from '@mui/material/Button';
import './styles.scss';

/**
 * A button component that makes the CarModal appear so the user can add a car.
 *
 * @param {function} onClick - Function to be executed when the button is clicked.
 * @see {CarModal}
 */
export const AddCarButton = ({ onClick }) => {
  return (
    <Button variant="contained" className="add-car-button" onClick={onClick} color="success">
      + Add new car
    </Button>
  );
};
