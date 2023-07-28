import { Input } from "@chakra-ui/react";

import React from 'react'

export const BaseInput = (props) => {
    const { type, w, onChange, value } = props;
  return (
    <Input
      bg="white"
      type={type}
      w={w}
      value={value}
      borderRadius="10px"
      placeholder="名前"
      onChange={onChange}
    />
  );
}
