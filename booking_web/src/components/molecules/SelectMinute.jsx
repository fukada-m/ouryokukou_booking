import React, { useEffect } from 'react'
import { Select, FormLabel } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { minuteState } from "../../atom/state";

export const SelectMinute = () => {
    const [minitue, setMinute] = useRecoilState(minuteState);

  return (
    <>
      <Select
        w={"80px"}
        bg={"white"}
        value={minitue}
        onChange={(e) => setMinute(e.target.value)}
      >
        {["00", "15", "30", "45"].map((minitue) => (
          <option key={minitue} value={minitue}>
            {minitue}
          </option>
        ))}
      </Select>
      <FormLabel fontSize={"2xl"}>分</FormLabel>
    </>
  );
}

