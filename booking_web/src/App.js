import './App.css';
import { Routes, Route } from "react-router-dom";
import { AllBooking } from './components/AllBooking';
import { Test } from './components/Test'
import { CreateBooking } from './components/CreateBooking';
import { DeleteBooking } from './components/DeleteBooking.jsx';


function App() {

  return (
    <>
      {/* <Test /> */}
      <h1>Booking Web</h1>
      <AllBooking />
      <CreateBooking />
      <DeleteBooking />
    </>
  );
}

export default App;
