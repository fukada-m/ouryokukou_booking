import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";

import { optionDispState } from "../../atom/state";
import { MainHeading } from "../atoms/heading/MainHeading";
import { RegisterBookingButton } from "../atoms/button/RegisterBookingButton";
import { InputArea } from "../organisms/InputArea";
import { useFetchBooking } from "../../hooks/useFetchBooking";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { AddTableRelationButton } from "../atoms/button/AddTableRelationButton";
import { RemoveTableRelationButton } from "../atoms/button/RemoveTableRelationButton";

export const UpdateBooking = () => {
  const setOptionDisp = useSetRecoilState(optionDispState);
    const { bookingId, tableId } = useParams();

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
      <Box p={{ base: 3, md: 5 }} bg="red.100">
        <InputArea />
        <Box px={30} py={3}>
          <AddTableRelationButton bookingId={bookingId} />
        </Box>
        <Box px={30} py={3}>
          <RemoveTableRelationButton bookingId={bookingId} tableId={tableId} />
        </Box>
        <Box px={30} py={3}>
          <DeleteButton bookingId={bookingId} tableId={tableId} />
          <RegisterBookingButton onClick="update" />
        </Box>
      </Box>
    </>
  );
};
