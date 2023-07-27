import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import {Box} from "@chakra-ui/react";

import { optionDispState } from "../../atom/state";
import { MainHeading } from '../atoms/heading/MainHeading'
import { InputArea } from "../organisms/layout/InputArea";
import { RegisterBookingButton } from "../atoms/button/RegisterBookingButton";
import { SelectTable } from "../molecules/SelectTable";

export const CreateBooking = () => {

  const setOptionDisp = useSetRecoilState(optionDispState);

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
      <MainHeading>新規予約</MainHeading>
      <Box bg={"red.100"}>
        <Box display="flex">
          <InputArea />
        </Box>
        <Box px={"5"}>
          <SelectTable />
        </Box>
        <Box px={200} py={7}>
          <RegisterBookingButton onClick="create"/>
        </Box>
      </Box>
    </>
  );
};
