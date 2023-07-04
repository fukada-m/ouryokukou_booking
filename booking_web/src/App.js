import './App.css';
import { axiosInstance } from './utils/axios';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('チェックしてみて');
  const [testData, setTestData] = useState([{id: 1, name: 'テストデータ'}]);

  const onClick1 = async () => {
    try {
      const res = await axiosInstance.get("/health_check");
      setStatus(res.data.status);
    } catch (error) {
      console.error(error);
      setStatus('An error occurred while checking health status.');
    }
  };

  const onClick2 = async () => {
    try {
      const res = await axiosInstance.get("/test_db");
      setTestData(res.data);
    } catch (error) {
      console.error(error);
      setTestData([{id: 1, name: 'An error occurred while checking test db.'}]);
    }
  };


  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>Booking Web</h1>
      <div style={ {marginTop: "20px"} }>
        <p>Status: {status}</p>
        <p>Test DB:</p>
        {testData.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
        <button onClick={onClick1}>Health Check</button>
        <button onClick={onClick2}>Test DB</button>
      </div>
    </div>
  );
}

export default App;
