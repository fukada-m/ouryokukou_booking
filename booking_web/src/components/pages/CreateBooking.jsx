import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Heading, Box, Button, Input, FormLabel, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea } from "@chakra-ui/react";
// import { TimePicker } from "react-time-picker";

import { createBooking } from "../../utils/api";
import { getWeek } from "../../utils/date";
import { optionDispState } from "../../atom/state";
import { useMessage } from "../../hooks/useMessage";


export const CreateBooking = () => {
  const navigate = useNavigate();
  const {showMessage} = useMessage();
  const setOptionDisp = useSetRecoilState(optionDispState);

  const [date, setDate] = useState();
  const [time, setTime] = useState('18:00');
  const [name, setName] = useState();
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [bookingCategoryId, setBookingCategoryId] = useState("1");
  const [tableId, setTableId] = useState();
  const [note, setNote] = useState();

  const tableNum = [
    { id: "", name: "未定" },
    { id: 1, name: "1番" },
    { id: 2, name: "2番" },
    { id: 3, name: "3番" },
    { id: 5, name: "5番" },
    { id: 11, name: "11番" },
    { id: 12, name: "12番" },
    { id: 13, name: "13番" },
    { id: 14, name: "14番" },
    { id: 15, name: "15番" },
    { id: 16, name: "16番" },
    { id: 21, name: "21番" },
  ];

  const create = async () => {
    const week = getWeek(date);
    const data = {
      booking: {
        date,
        week,
        time,
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
      showMessage({title: "予約の作成に成功しました", status: "success"});
      navigate("/allBooking");
    } else {
      showMessage({title: "予約の作成に失敗しました", status: "error"});
    }
  };

  useEffect(() => {
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
      <Heading px={5} as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
        新規予約
      </Heading>
      <Box p={{ base: 5, md: 10}} bg="red.100">
        <Box py={3} display="flex">
          <Input
            bg="white"
            type="date"
            w="150px"
            borderRadius="10px"
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            bg="white"
            type="time"
            w="120px"
            mx={2}
            borderRadius="10px"
            onChange={(e) => setTime(e.target.value)}
          />
          {/* <TimePicker
          onChange={(e) => setTime(e)}
          value={time}
          format="HH:mm"
          disableClock={true}
          minuteAriaLabel="分"
          minutePlaceholder="0, 15, 30, 45"
          /> */}
          <Input
            type="text"
            bg="white"
            w="150px"
            borderRadius="10px"
            placeholder="名前"
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
          <FormLabel  fontSize={"2xl"}>LINE</FormLabel>
          <input
            type="radio"
            value="2"
            checked={bookingCategoryId === "2"}
            onChange={() => setBookingCategoryId("2")}
          />
          <FormLabel fontSize={"2xl"}>電話</FormLabel>
        </Box>
        <Box display="flex">
          <FormLabel fontSize={"2xl"}>卓番</FormLabel>
          <Select
            w={"100px"}
            bg={"white"}
            value={tableId}
            onChange={(e) => setTableId(e.target.value)}
          >
            {tableNum.map((table) => (
              <option key={table.id} value={table.id}>
                {table.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box py={3} display="flex">
        <FormLabel fontSize={"2xl"}>備考</FormLabel>
        <Textarea bg={"white"} w={"400px"} onChange={(e) => setNote(e.target.value)} />
        </Box>
        <Box  px={30} py={3} ><Button fontSize={"2xl"} p={8} bg={"white"}  onClick={create}>登録</Button></Box>
      </Box>
    </>
  );
};
