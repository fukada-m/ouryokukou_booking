import React from "react";
import { Box } from "@chakra-ui/react";

import { InputDate } from "../atoms/input/InputDate";
import { SelectHour } from "../molecules/SelectHour";
import { SelectMinute } from "../molecules/SelectMinute";
import { InputName } from "../atoms/input/InputName";
import { SelectMember } from "../molecules/SelectMember";
import { RadioBookingCategory } from "../molecules/RadioBookingCategory";
import { TextNote } from "../molecules/TextNote";

export const InputArea = () => {
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
