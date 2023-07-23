import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Heading, Box, Input, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, Textarea,Button  } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { getAllBooking, updateBooking } from '../../utils/api';
import { optionDispState } from "../../atom/state";

export const UpdateBooking = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  const setOptionDisp = useSetRecoilState(optionDispState);

    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [numberOfAdults, setNumberOfAdults] = useState();
    const [numberOfChildren, setNumberOfChildren] = useState();
    const [bookingCategoryId, setBookingCategoryId] = useState();
    const [note, setNote] = useState();

    const fetchBooking = async () => {
      const allBooking = await getAllBooking();
      const booking = allBooking.find((booking) => booking.id === Number(id));
      const { date, time, name, number_of_adults, number_of_children, booking_category, note } = booking
      setDate(date);
      setTime(time);
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
      setOptionDisp({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: false,
    });
      }, []);

      const update = async () => {
      const data = {
        booking: {
          id,
          date,
          time,
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
        <Heading px={5} as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
          予約の編集
        </Heading>
        <Box p={{ base: 5, md: 10 }} bg="red.100">
          <Box py={3} display="flex">
            <Input
              bg="white"
              type="date"
              w="150px"
              borderRadius="10px"
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              bg="white"
              type="time"
              w="120px"
              mx={2}
              borderRadius="10px"
              defaultValue={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Input
              type="text"
              bg="white"
              w="150px"
              borderRadius="10px"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box display="flex">
            <FormLabel fontSize={"2xl"}>大人</FormLabel>
            <NumberInput
              w="80px"
              min={1}
              max={60}
              onChange={(value) => setNumberOfAdults(parseInt(value))}
              defaultValue={numberOfAdults}
              value={numberOfAdults}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel fontSize={"2xl"}>子供</FormLabel>
            <NumberInput
              w="80px"
              min={0}
              max={60}
              onChange={(value) => setNumberOfChildren(parseInt(value))}
              defaultValue={numberOfChildren}
              value={numberOfChildren}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box display="flex">
            <FormLabel fontSize={"2xl"}>予約カテゴリー</FormLabel>
            <input
              type="radio"
              value="1"
              checked={bookingCategoryId === "1"}
              onChange={() => setBookingCategoryId("1")}
            />
            <FormLabel fontSize={"2xl"}>LINE</FormLabel>
            <input
              type="radio"
              value="2"
              checked={bookingCategoryId === "2"}
              onChange={() => setBookingCategoryId("2")}
            />
            <FormLabel fontSize={"2xl"}>電話</FormLabel>
          </Box>
          <Box py={3} display="flex">
            <FormLabel fontSize={"2xl"}>備考</FormLabel>
            <Textarea
              bg={"white"}
              w={"400px"}
              onChange={(e) => setNote(e.target.value)}
              defaultValue={note}
            />
          </Box>
          <Box px={30} py={3}>
            <Button fontSize={"2xl"} p={8} bg={"white"} onClick={update}>
              登録
            </Button>
          </Box>
        </Box>
      </>
    );
  };


