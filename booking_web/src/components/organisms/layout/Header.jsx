import React, { useCallback } from "react";
import { Flex, Button, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { Options } from "../../molecules/Options";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickAllBooking = useCallback(() => navigate("/allBooking"), []);
  const onClickTodayBooking = useCallback(() => navigate("/todayBooking"), []);
  const onClickCreateBooking = useCallback(() => navigate("/createBooking"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="red.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "lg", md: "xl" }}>
          鴨緑江Booking
        </Heading>
        <Flex align="center" flexGrow={2}>
          <Box pr={4} pl={4}>
            <Link onClick={onClickAllBooking}>全予約</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickTodayBooking}>今日の予約</Link>
          </Box>
          <Link onClick={onClickCreateBooking}>新規予約</Link>
        </Flex>
        <Options />
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
