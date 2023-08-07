import React, { useCallback } from "react";
import { Flex, Heading, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { Options } from "../../molecules/Options";
import { useNavigate } from "react-router-dom";
import { HeaderLink } from "../../atoms/Link/HeaderLink";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickAllBooking = useCallback(() => navigate("/allBooking"), []);
  const onClickTodayBooking = useCallback(() => navigate("/todayBooking"), []);
  const onClickCreateBooking = useCallback(
    () => navigate("/createBooking"),
    []
  );

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
        <Heading
          as="h1"
          fontSize={{ base: "lg", md: "xl" }}
          display={{ base: "none", sm: "block" }}
        >
          鴨緑江Booking
        </Heading>
        <Flex align="center" flexGrow={2}>
          <Box pr={2} pl={4}>
            <HeaderLink onClick={onClickAllBooking}>全予約</HeaderLink>
          </Box>
          <Box pr={2}>
            <HeaderLink onClick={onClickTodayBooking}>今日の予約</HeaderLink>
          </Box>
          <HeaderLink onClick={onClickCreateBooking}>新規予約</HeaderLink>
        </Flex>
        <Options />
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
