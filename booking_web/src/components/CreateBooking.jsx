import React, {useState} from 'react'
import { axiosInstance } from '../utils/axios'

export const CreateBooking = () => {
    const [date, SetDate] = useState()
    const [name, SetName] = useState()
    const [numberOfAdults, SetNumberOfAdults] = useState(1)
    const [numberOfChildren, SetNumberOfChildren] = useState(1)
    const [bookingCategoryId, SetBookingCategoryId] = useState(1)
    const [tableId, SetTableId] = useState()
    const [note, SetNote] = useState()

    const data = {
        booking: {
            date: date,
            name: name,
            number_of_adults: numberOfAdults,
            number_of_children: numberOfChildren,
            booking_category_id: bookingCategoryId,
            note: note,
        },
        table: {
            id: [tableId],
        }
    }

    const postBooking = async () => {
        try {
            const res = await axiosInstance.post("/api/create_booking", data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <h1>CreateBooking</h1>
      <div>
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
        <label>卓版</label>
        <input
          type="number"
          value={tableId}
          onChange={(e) => {
            SetTableId(e.target.value)
            console.log(tableId)
          }}
          min={1}
          max={99}
        />
        <label>備考</label>
        <textarea onChange={(e) => SetNote(e.target.value)} />
        <button onClick={postBooking}>登録</button>
      </div>
    </>
  );
}

