import React from "react";
import { InputBookingCategory } from "../atoms/input/InputBookingCategory";
import { FormLabel } from "@chakra-ui/react";

export const RadioBookingCategory = () => {
  return (
    <>
      <FormLabel fontSize={"2xl"}>予約カテゴリー</FormLabel>
      <InputBookingCategory value="1" />
      <FormLabel fontSize={"2xl"}>LINE</FormLabel>
      <InputBookingCategory value="2" />
      <FormLabel fontSize={"2xl"}>電話</FormLabel>
    </>
  );
};
