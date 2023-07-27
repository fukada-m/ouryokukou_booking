import React, { useEffect } from "react";
import {Box} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { optionDispState } from "../../atom/state";
import { MainHeading } from "../atoms/heading/MainHeading";
import { RegisterBookingButton } from "../atoms/button/RegisterBookingButton";
import { InputArea } from "../organisms/layout/InputArea";
import { useFetchBooking } from "../../hooks/useFetchBooking";

export const UpdateBooking = () => {
  const setOptionDisp = useSetRecoilState(optionDispState);
  const { fetchBooking } = useFetchBooking();

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
