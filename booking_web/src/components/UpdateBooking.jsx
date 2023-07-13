import React, { useState } from 'react'
import { axiosInstance } from "../utils/axios";

export const UpdateBooking = () => {
    const [id, SetId] = useState();
    const [date, SetDate] = useState();
    const [name, SetName] = useState();
    const [numberOfAdults, SetNumberOfAdults] = useState(1);
    const [numberOfChildren, SetNumberOfChildren] = useState(1);
    const [bookingCategoryId, SetBookingCategoryId] = useState(1);
    const [tableId, SetTableId] = useState();
    const [note, SetNote] = useState();

    const data = {
      booking: {
        id: id,
        date: date,
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

    const create = async () => {
      try {
        const res = await axiosInstance.put("/api/update_booking", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <>
        <h1>UpdateBooking</h1>
        <div>
          <label>予約ID</label>
          <input type="number" onChange={(e) => SetId(e.target.value)} />
          <label>日付</label>
          <input type="date" onChange={(e) => SetDate(e.target.value)} />
          <label>名前</label>
          <input type="text" onChange={(e) => SetName(e.target.value)} />
          <label>大人</label>
          <input
            type="number"
            value={numberOfAdults}
            onChange={(e) => SetNumberOfAdults(e.target.value)}
            min={1}
            max={99}
          />
          <label>子供</label>
          <input
            type="number"
            value={numberOfChildren}
            onChange={(e) => SetNumberOfChildren(e.target.value)}
            min={0}
            max={99}
          />
          <label>予約カテゴリー</label>
          <input
            type="number"
            value={bookingCategoryId}
            onChange={(e) => SetBookingCategoryId(e.target.value)}
            min={1}
            max={2}
          />
          <label>備考</label>
          <textarea onChange={(e) => SetNote(e.target.value)} />
          <button onClick={create}>登録</button>
        </div>
      </>
    );
  };


