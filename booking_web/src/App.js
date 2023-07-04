import './App.css';
import { axiosInstance } from './utils/axios';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('チェックしてみて');

  const onClick = async () => {
    const res =  await axiosInstance.get("/health_check");
    setStatus(res.data.status);
  };

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>Booking Web</h1>
      <div style={ {marginTop: "20px"} }>
            <p>Status: {status}</p>
        <button onClick={onClick}>Health Check</button>
      </div>
    </div>
  );
}

export default App;
