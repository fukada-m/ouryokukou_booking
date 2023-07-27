import React, { useEffect } from 'react'
import { Select, FormLabel } from '@chakra-ui/react'
import { useRecoilState } from "recoil";
import { hourState } from '../../atom/state'

export const SelectHour = () => {
    const [hour, setHour] = useRecoilState(hourState);

  return (
    <>
      <Select
        w={"80px"}
        bg={"white"}
        value={hour}
        onChange={(e) => setHour(e.target.value)}
      >
        {["11", "12", "13", "17", "18", "19", "20", "21"].map((hour) => (
          <option key={hour} >
            {hour}
          </option>
        ))}
      </Select>
      <FormLabel fontSize={"2xl"}>時</FormLabel>
    </>
  );
}
