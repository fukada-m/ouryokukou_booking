import React from 'react'
import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useMessage } from "../../../hooks/useMessage";
import { getWeek } from "../../../utils/date";
import { createBooking, updateBooking } from "../../../utils/api";
import { useRecoilValue } from 'recoil';
import { dateState, hourState, minuteState, nameState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, tableIdState, noteState } from '../../../atom/state';
import { useReset } from '../../../hooks/useReset';

export const RegisterBookingButton = (props) => {
  const { onClick } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { reset } = useReset();
  const date = useRecoilValue(dateState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);
  const name = useRecoilValue(nameState);
  const numberOfAdults = useRecoilValue(numberOfAdultsState);
  const numberOfChildren = useRecoilValue(numberOfChildrenState);
  const bookingCategoryId = useRecoilValue(bookingCategoryIdState);
  const tableId = useRecoilValue(tableIdState);
  const note = useRecoilValue(noteState);

  const register = () => {
    if (onClick === "create") {
      create();
    } else if (onClick === "update") {
      update();
    }
  };

  const create = async () => {
    const week = getWeek(date);
    const data = {
      booking: {
        date,
        week,
        time: `${hour}:${minute}`,
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
    const res = await createBooking(data);
    if (res.status === "SUCCESS") {
      showMessage({ title: "予約の作成に成功しました", status: "success" });
      navigate("/allBooking");
      // reset();
    } else {
      showMessage({ title: "予約の作成に失敗しました", status: "error" });
    }
  };

  const update = async () => {
    const week = getWeek(date);
    const data = {
      booking: {
        id,
        week,
        date,
        time: `${hour}:${minute}`,
        name,
        number_of_adults: numberOfAdults,
        number_of_children: numberOfChildren,
        booking_category_id: bookingCategoryId,
        note,
      },
    };
    const res = await updateBooking(data);
    if (res.status === "SUCCESS") {
      showMessage({
        title: "予約の更新に成功しました",
        status: "success",
      });
      navigate("/allBooking");
    } else {
      showMessage({
        title: "予約の更新に失敗しました",
        status: "error",
      });
    }
  };

  return (
    <Button fontSize={"2xl"} p={8} bg={"white"} onClick={register}>
      登録
    </Button>
  );
}
