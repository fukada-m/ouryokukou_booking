import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, chakra } from "@chakra-ui/react";

export const Page404 = () => {
  const Link = chakra(RouterLink);

  return (
    <Box p={4}>
      <Heading p={4}>ページが見つかりません</Heading>
      <Link
        p={4}
        m={6}
        bg={"white"}
        borderRadius={15}
        _hover={{ bg: "gray.200", opacity: "0.8" }}
        to="/allBooking"
      >
        全ての予約を表示に戻る
      </Link>
    </Box>
  );
};
