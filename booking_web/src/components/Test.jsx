import React from "react";
import { useState } from "react";
import { axiosInstance } from "../utils/axios";

// 疎通確認用のコンポーネント
export const Test = () => {
  const [status, setStatus] = useState("チェックしてみて");
  const [testData, setTestData] = useState([
    { id: 1, name: "テストデータNone" },
  ]);

  const onClick1 = async () => {
    try {
      const res = await axiosInstance.get("/health_check");
      setStatus(res.data.status);
    } catch (error) {
      console.error(error);
      setStatus("An error occurred while checking health status.");
    }
  };

  const onClick2 = async () => {
    try {
      const res = await axiosInstance.get("/test_db");
      console.log(res.data);
      setTestData(res.data);
    } catch (error) {
      console.error(error);
      setTestData([
        { id: 1, name: "An error occurred while checking test db." },
      ]);
    }
  };

  return (
    <div>
      <h1>Booking Web</h1>
      <div>
        <p>Status: {status}</p>
        <p>Testデータ:</p>
        {testData.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
        <button onClick={onClick1}>Health Check</button>
        <button onClick={onClick2}>Test DBからデータを取得</button>
      </div>
    </div>
  );
};
