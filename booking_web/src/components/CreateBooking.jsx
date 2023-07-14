import React, { useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { useNavigate } from 'react-router-dom'

export const CreateBooking = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [name, setName] = useState()
    const [numberOfAdults, setNumberOfAdults] = useState(1)
    const [numberOfChildren, setNumberOfChildren] = useState(1)
    const [bookingCategoryId, setBookingCategoryId] = useState(1)
    const [tableId, setTableId] = useState()
    const [note, setNote] = useState()
    const weekChars = [
      "日",
      "月",
      "火",
      "水",
      "木",
      "金",
      "土",
    ];

    const create = async () => {
      const today = new Date(date)
      const week = weekChars[today.getDay()]
          const data = {
            booking: {
              date: date,
              week: week,
              time: time,
              name: name,
              number_of_adults: numberOfAdults,
              number_of_children: numberOfChildren,
              booking_category_id: bookingCategoryId,
              note: note,
            },
            table: {
              id: [tableId],
            },
          };
        try {
            const res = await axiosInstance.post("/api/create_booking", data);
            console.log(res.data);
            if (res.data.status === "SUCCESS") {
              alert("予約の作成が完了しました");
              navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <h1>CreateBooking</h1>
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <label>名前</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
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
        <label>予約カテゴリー</label>
        <input
          type="number"
          value={bookingCategoryId}
          onChange={(e) => setBookingCategoryId(e.target.value)}
          min={1}
          max={2}
        />
        <label>卓版</label>
        <input
          type="number"
          value={tableId}
          onChange={(e) => setTableId(e.target.value)}
          min={1}
          max={99}
        />
        <label>備考</label>
        <textarea onChange={(e) => setNote(e.target.value)} />
        <button onClick={create}>登録</button>
      </div>
    </>
  );
}

