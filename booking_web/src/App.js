import './App.css';
import { Routes, Route } from "react-router-dom";
import { AllBooking } from './components/AllBooking';
import { Test } from './components/Test'
import { Header } from './components/Header';
import { CreateBooking } from './components/CreateBooking';
import { DeleteBooking } from './components/DeleteBooking.jsx';
import { UpdateBooking } from './components/UpdateBooking';
import { TodayBooking } from './components/TodayBooking';


function App() {

  return (
    <>
      <h1>Booking Web</h1>
      <Header />
      <Routes>
        <Route path="/" element={<AllBooking />} />
        <Route path="/allBooking" element={<AllBooking />} />
        <Route path="/todayBooking" element={<TodayBooking />} />
      </Routes>
      <CreateBooking />
      <DeleteBooking />
      <UpdateBooking />
    </>
  );
}

export default App;
