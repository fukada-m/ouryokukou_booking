import './App.css';
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { AllBooking } from './components/AllBooking';
import { Header } from './components/Header';
import { CreateBooking } from './components/CreateBooking';
import { UpdateBooking } from './components/UpdateBooking';
import { TodayBooking } from './components/TodayBooking';


function App() {

  return (
    <>
      <h1>Booking Web</h1>
      <Header />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<AllBooking />} />
          <Route path="/allBooking" element={<AllBooking />} />
          <Route path="/todayBooking" element={<TodayBooking />} />
          <Route path="/createBooking" element={<CreateBooking />} />
          <Route path="/editBooking/:id" element={<UpdateBooking />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
