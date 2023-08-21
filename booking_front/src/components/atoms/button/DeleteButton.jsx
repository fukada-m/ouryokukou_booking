import React from "react";
import { Button } from "@chakra-ui/react";
import { useDeleteBooking } from "../../../hooks/useDeleteBooking";

export const DeleteButton = (props) => {
  const { bookingId } = props;
  const { destroy } = useDeleteBooking();

  const onClickDelete = async () => {
    destroy(bookingId);

  };

  return (
    <>
      <Button bg={"white"} p={8} fontSize={"2xl"} onClick={onClickDelete}>削除</Button>
    </>
  );
};
