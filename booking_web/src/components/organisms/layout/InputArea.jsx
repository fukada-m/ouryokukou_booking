import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { InputDate } from "../../atoms/input/InputDate";
import { SelectHour } from "../../molecules/SelectHour";
import { SelectMinute } from "../../molecules/SelectMinute";
import { InputName } from "../../atoms/input/InputName";
import { SelectMember } from "../../molecules/SelectMember";
import { RadioBookingCategory } from "../../molecules/RadioBookingCategory";
import { SelectTable } from "../../molecules/SelectTable";
import { TextNote } from "../../molecules/TextNote";

export const InputArea = (props) => {
    // const { defaultValue } = props;
    // const [date, setDate] = useState("");
    // const [name, setName] = useState("");
    // const [hour, setHour] = useState("");
    // const [minute, setMinute] = useState("");
    // const [numberOfAdults, setNumberOfAdults] = useState("");
    // const [numberOfChildren, setNumberOfChildren] = useState("");
    // const [bookingCategory, setBookingCategory] = useState("");
    // const [note, setNote] = useState("");

    // useEffect(() => {
    //     if (!defaultValue) return;
    //     setDate(defaultValue.date);
    //     setName(defaultValue.name);
    //     setHour(defaultValue.time.slice(0, 2));
    //     setMinute(defaultValue.time.slice(3, 5));
    //     setNumberOfAdults(defaultValue.numberOfAdults);
    //     setNumberOfChildren(defaultValue.numberOfChildren);
    //     setBookingCategory(defaultValue.bookingCategory);
    //     setNote(defaultValue.note);
    // }, [defaultValue]);

  return (
    <Box p={{ base: 5, md: 10 }}>
      <Box display="flex">
        <InputDate />
        <Box pl={3} display="flex">
          <SelectHour />
        </Box>
          <SelectMinute />
      </Box>
      <Box py={5} display="flex">
        <InputName />
      </Box>
      <Box display="flex">
        <SelectMember />
      </Box>
      <Box py={3} display="flex">
        <RadioBookingCategory />
      </Box>
      <Box py={3} display="flex">
        <TextNote />
      </Box>
    </Box>
  );
};
