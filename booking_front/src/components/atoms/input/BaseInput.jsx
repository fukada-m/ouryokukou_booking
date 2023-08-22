import { Input } from "@chakra-ui/react";

import React from "react";

export const BaseInput = (props) => {
  const { type, w, onChange, placeholder, value, m } = props;
  return (
    <Input
      bg="white"
      type={type}
      m={m}
      w={w}
      value={value}
      borderRadius="10px"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
