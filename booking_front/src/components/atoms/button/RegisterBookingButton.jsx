import React from "react";
import { Button } from "@chakra-ui/react";
import { useCreateBooking } from "../../../hooks/useCreateBooking";
import { useUpdateBooking } from "../../../hooks/useUpdateBooking";

export const RegisterBookingButton = (props) => {
  const { onClick } = props;
  const { create } = useCreateBooking();
  const { update } = useUpdateBooking();

  const register = () => {
    if (onClick === "create") {
      create();
    } else if (onClick === "update") {
      update();
    }
  };

  return (
    <Button fontSize={"2xl"} p={8} bg={"white"} onClick={register}>
      登録
    </Button>
  );
};
