import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios";
import { useParams, useNavigate } from "react-router-dom";


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
      const allBooking = await axiosInstance.get("/api/get_all_booking");
      const booking = allBooking.data.find((booking) => booking.id === Number(id));
      console.log(booking);
      setDate(booking.date);
      setName(booking.name);
      setNumberOfAdults(booking.number_of_adults);
      setNumberOfChildren(booking.number_of_children);
      if (booking.booking_category.name === "LINE") {
        setBookingCategoryId("1");
      }else if (booking.booking_category.name === "電話") {
        setBookingCategoryId("2");
      }
      setNote(booking.note);
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
      try {
        const res = await axiosInstance.put("/api/update_booking", data);
        console.log(res.data);
        if (res.data.status === "SUCCESS") {
          // alert("予約の更新が完了しました");
          navigate("/allBooking");
        }
      } catch (error) {
        console.error(error);
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


