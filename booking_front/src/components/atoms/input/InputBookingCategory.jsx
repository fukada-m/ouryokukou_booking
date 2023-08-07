import React from "react";
import { useRecoilState } from "recoil";
import { bookingCategoryIdState } from "../../../atom/state";

export const InputBookingCategory = (props) => {
  const { value } = props;
  const [bookingCategoryId, setBookingCategoryId] = useRecoilState(
    bookingCategoryIdState
  );

  return (
    <input
      type="radio"
      value={value}
      checked={bookingCategoryId === value}
      onChange={() => setBookingCategoryId(value)}
    />
  );
};
