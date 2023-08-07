import React from "react";
import { Button } from "@chakra-ui/react";
import { useDeleteBooking } from "../../../hooks/useDeleteBooking";

export const DeleteButton = (props) => {
  const { bookingId, table } = props;
  const { destroy } = useDeleteBooking();

  const onClickDelete = async () => {
    destroy(bookingId, table);
  };

  return (
    <>
      <Button onClick={onClickDelete}>削除</Button>
    </>
  );
};
