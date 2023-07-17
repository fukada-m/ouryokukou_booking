import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getAllBooking, updateBooking } from '../utils/api';


export const UpdateBooking = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [numberOfAdults, setNumberOfAdults] = useState();
    const [numberOfChildren, setNumberOfChildren] = useState();
    const [bookingCategoryId, setBookingCategoryId] = useState();
    const [note, setNote] = useState();

    const fetchBooking = async () => {
      const allBooking = await getAllBooking();
      const booking = allBooking.find((booking) => booking.id === Number(id));
      const { date, name, number_of_adults, number_of_children, booking_category, note } = booking
      setDate(date);
      setName(name);
      setNumberOfAdults(number_of_adults);
      setNumberOfChildren(number_of_children);
      if (booking_category.name === "LINE") {
        setBookingCategoryId("1");
      }else if (booking_category.name === "電話") {
        setBookingCategoryId("2");
      }
      setNote(note);
    };

    useEffect(() => {
      fetchBooking();
      }, []);

      const update = async () => {
      const data = {
        booking: {
          id,
          date,
          name,
          number_of_adults: numberOfAdults,
          number_of_children: numberOfChildren,
          booking_category_id: bookingCategoryId,
          note,
        }
      };
      const res = await updateBooking(data);
        if (res.status === "SUCCESS") {
          // alert("予約の更新が完了しました");
          navigate("/allBooking");
        }
    };

    return (
      <>
        <h1>UpdateBooking</h1>
        <div>
          <label>日付</label>
          <input
            type="date"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>名前</label>
          <input
            type="text"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>大人</label>
          <input
            type="number"
            defaultValue={numberOfAdults}
            onChange={(e) => setNumberOfAdults(e.target.value)}
            min={1}
            max={99}
          />
          <label>子供</label>
          <input
            type="number"
            defaultValue={numberOfChildren}
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
          <label htmlFor="option1">LINE</label>

          <input
            type="radio"
            value="2"
            checked={bookingCategoryId === "2"}
            onChange={() => setBookingCategoryId("2")}
          />
          <label htmlFor="option2">電話</label>
          <br />
          <label>備考</label>
          <textarea defaultValue={note} onChange={(e) => setNote(e.target.value)} />
          <button onClick={update}>更新</button>
        </div>
      </>
    );
  };


