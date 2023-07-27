import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Box} from "@chakra-ui/react";
import { useSetRecoilState, useRecoilState } from "recoil";

import { getAllBooking, updateBooking } from "../../utils/api";
import { optionDispState } from "../../atom/state";
import { useMessage } from "../../hooks/useMessage";
import { MainHeading } from "../atoms/heading/MainHeading";
import { SelectMember } from "../molecules/SelectMember";
import { InputDate } from "../atoms/input/InputDate";
import { nameState, dateState, hourState, minuteState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, noteState } from "../../atom/state";
import { RadioBookingCategory } from "../molecules/RadioBookingCategory";
import { TextNote } from "../molecules/TextNote";
import { RegisterBookingButton } from "../atoms/button/RegisterBookingButton";
import { InputArea } from "../organisms/layout/InputArea";

export const UpdateBooking = () => {
  const { id } = useParams();
  const setOptionDisp = useSetRecoilState(optionDispState);
  const setDate = useSetRecoilState(dateState);
  const setHour = useSetRecoilState(hourState);
  const setMinute = useSetRecoilState(minuteState);
  const setName = useSetRecoilState(nameState);
  const setNumberOfAdults = useSetRecoilState(numberOfAdultsState);
  const setNumberOfChildren = useSetRecoilState(numberOfChildrenState);
  const setBookingCategoryId = useSetRecoilState(bookingCategoryIdState);
  const setNote = useSetRecoilState(noteState);


  const fetchBooking = async () => {
    const allBooking = await getAllBooking();
    const booking = allBooking.find((booking) => booking.id === Number(id));
    setDate(booking.date);
    console.log(booking.time.slice(0, 2));
    setHour(booking.time.slice(0, 2));
    setMinute(booking.time.slice(3, 5));
    setName(booking.name);
    setNumberOfAdults(booking.number_of_adults);
    setNumberOfChildren(booking.number_of_children);
    if (booking.booking_category.name === "LINE") {
      setBookingCategoryId("1");
    }else {
      setBookingCategoryId("2");
    }
    setNote(booking.note);
  };

  useEffect(() => {
    fetchBooking();
    setOptionDisp({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: false,
    });
  }, []);



  return (
    <>
      <MainHeading>予約の編集</MainHeading>
      <Box p={{ base: 5, md: 10 }} bg="red.100">
        <InputArea />
        <Box px={30} py={3}>
          <RegisterBookingButton onClick="update" />
        </Box>
      </Box>
    </>
  );
};
