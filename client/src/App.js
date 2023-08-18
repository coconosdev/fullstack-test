import { useState, useEffect } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CartList } from './components/CarList/CarList';
import { CarModal } from './components/CarModal/CarModal';
import { AddCarButton } from './components/AddCarButton/AddCarButton';
import { CarsService } from './services/cars.service';
import { Toaster } from 'react-hot-toast';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const carsService = new CarsService();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchCars = () => {
    carsService.getCars().then((res) => {
      setCars(res);
    });
  };

  const onModalSubmit = () => {
    fetchCars();
  };

  return (
    <div className="App">
      <main>
        <CartList cars={cars} />
      </main>
      <AddCarButton onClick={openModal} />
      <CarModal modalIsOpen={modalIsOpen} closeModal={closeModal} onModalSubmit={onModalSubmit} />
      <Toaster />
    </div>
  );
}

export default App;
