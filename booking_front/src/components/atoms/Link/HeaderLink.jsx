import React from "react";
import { Link } from "@chakra-ui/react";

export const HeaderLink = (props) => {
  const { children, onClick } = props;
  return (
    <Link
      onClick={onClick}
      bg="white"
      color="black"
      borderRadius="15px"
      p={2}
      fontWeight="bold"
    >
      {children}
    </Link>
  );
};
