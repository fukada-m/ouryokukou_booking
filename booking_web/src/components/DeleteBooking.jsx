import React, { useState }from "react";
import { axiosInstance } from "../utils/axios";

export const DeleteBooking = () => {
  const [id, SetId] = useState();
  const data = {
    booking: {
      id: id,
    },
  };

  const destory = async () => {
    try {
      const res = await axiosInstance.delete("/api/delete_booking", { data });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>DeleteBooking</h1>
      <input type="number" onChange={(e) => SetId(e.target.value)} />
      <button onClick={destory}>削除</button>
    </div>
  );
};
