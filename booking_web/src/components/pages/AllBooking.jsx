import React, { useEffect, useState } from "react";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { Link } from "react-router-dom";
import { AddTableRelationButton } from "../AddTableRelationButton";
import { RemoveTableRelationButton } from "../RemoveTableRelationButton";
import { getAllBooking } from "../../utils/api";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { allBookingState, buttonDispState } from "../../atom/state";

export const AllBooking = () => {
  const [allBooking, setAllBooking] = useRecoilState(allBookingState);
  const dispButton = useRecoilValue(buttonDispState);


  const fetchAllBooking = async () => {
    setAllBooking(await getAllBooking());
  };


  useEffect(() => {
    fetchAllBooking();
  }, []);

  return (
    <>
      <h1>予約一覧</h1>
      {allBooking.length === 0 && <h2>予約はまだありません</h2>}
      <div style={{ display: "flex" }}>
        {allBooking.map((booking) => (
          <div key={booking.id} style={{ margin: "20px" }}>
            <p>
              {booking.date}({booking.week})
            </p>
            <p>{booking.time}</p>
            <p>{booking.name}</p>
            <p>
              大人{booking.number_of_adults}人 子供{booking.number_of_children}
              人
            </p>
            <p></p>
            <p>{booking.booking_category.name}</p>
            {booking.tables.map((table, index) => (
              <div key={index}>
                <p>{table.name}</p>
              </div>
            ))}
            <p>備考：{booking.note}</p>
            {dispButton.delete == true && <DeleteButton bookingId={booking.id} table={null} />}
            {dispButton.addTable == true && <AddTableRelationButton bookingId={booking.id} />}
            {dispButton.removeTable == true && <RemoveTableRelationButton
              bookingId={booking.id}
              tableNum={booking.tables}
            />}
            {dispButton.edit == true && <Link to={`/editBooking/${booking.id}`}>編集</Link>}
          </div>
        ))}
      </div>
    </>
  );
};
