import React, { useState } from "react";
import { axiosInstance } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { getWeek } from "../utils/date";

export const CreateBooking = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState();
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [bookingCategoryId, setBookingCategoryId] = useState("1");
  const [tableId, setTableId] = useState();
  const [note, setNote] = useState();

  const create = async () => {
    const week = getWeek(date);
    const data = {
      booking: {
        date,
        week,
        time,
        name,
        number_of_adults: numberOfAdults,
        number_of_children: numberOfChildren,
        booking_category_id: bookingCategoryId,
        note,
      },
      table: {
        id: [tableId],
      },
    };
    try {
      const res = await axiosInstance.post("/api/create_booking", data);
      console.log(res.data);
      if (res.data.status === "SUCCESS") {
        // alert("予約の作成が完了しました");
        navigate("/allBooking");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>CreateBooking</h1>
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <label>名前</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>大人</label>
        <input
          type="number"
          value={numberOfAdults}
          onChange={(e) => setNumberOfAdults(e.target.value)}
          min={1}
          max={99}
        />
        <label>子供</label>
        <input
          type="number"
          value={numberOfChildren}
          onChange={(e) => setNumberOfChildren(e.target.value)}
          min={0}
          max={99}
        />
        <br />
        <label>予約カテゴリー</label>
        <input
          type="radio"
          value="1"
          checked={bookingCategoryId === "1"}
          onChange={() => setBookingCategoryId("1")}
        />
        <label>LINE</label>

        <input
          type="radio"
          value="2"
          checked={bookingCategoryId === "2"}
          onChange={() => setBookingCategoryId("2")}
        />
        <label>電話</label>
        <br />
        <label>卓番</label>
        <select value={tableId} onChange={(e) => setTableId(e.target.value)}>
          <option value="">未定</option>
          <option value="1">1番</option>
          <option value="2">2番</option>
          <option value="3">3番</option>
          <option value="5">5番</option>
          <option value="11">11番</option>
          <option value="12">12番</option>
          <option value="13">13番</option>
          <option value="14">14番</option>
          <option value="15">15番</option>
          <option value="16">16番</option>
          <option value="21">21番</option>
        </select>
        <br />
        <label>備考</label>
        <textarea onChange={(e) => setNote(e.target.value)} />
        <button onClick={create}>登録</button>
      </div>
    </>
  );
};
