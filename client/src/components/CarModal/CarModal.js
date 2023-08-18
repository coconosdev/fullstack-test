import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CarsService } from '../../services/cars.service';
import toast from 'react-hot-toast';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    maxWidth: '500px',
    transform: 'translate(-50%, -50%)',
  },
};

const initialValues = {
  make: '',
  model: '',
  package: '',
  color: '',
  year: '',
  category: '',
  mileage: '',
  price: 0,
};

/**
 * A modal component that includes a form that can be filled up to add a new car.
 *
 * @param {boolean} modalIsOpen - Whether the modal is open.
 * @param {function} closeModal - Function that closes the modal.
 * @param {function} onModalSubmit - Function that executes on modal submit.
 */
export const CarModal = ({ modalIsOpen, closeModal, onModalSubmit }) => {
  const carsService = new CarsService();
  const [form, setForm] = useState(initialValues);

  const submitForm = (event) => {
    event.preventDefault();
    carsService
      .addCar(form)
      .then((res) => {
        setForm(initialValues);
        onModalSubmit();
        toast.success('Car created successfully!', {
          position: 'bottom-center',
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Add car</h2>
      <form onSubmit={submitForm}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="make"
                label="Make"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.make}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="model"
                label="Model"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.model}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="package"
                label="Package"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.package}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="color"
                label="Color"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.color}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="year"
                label="Year"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.year}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="category"
                label="Category"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.category}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="mileage"
                label="Mileage (miles)"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.mileage}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Price"
                fullWidth
                onChange={handleChange}
                variant="standard"
                value={form.price}
              />
            </Grid>
          </Grid>
        </Paper>
        <Button variant="contained" onClick={submitForm} type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
};
