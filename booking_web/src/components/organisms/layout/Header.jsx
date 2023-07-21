import React from "react";
import { Flex, Button, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { Options } from "../../molecules/Options";
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Link>全ての予約</Link>
          </Box>
          <Box pr={4}>
            <Link>今日の予約</Link>
          </Box>
          <Link>新規予約</Link>
        </Flex>
        <Options />
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
    // <div>
    //   <h1>Header</h1>
    //   <Link to="/allBooking">全ての予約を表示</Link>
    //   <span> | </span>
    //   <Link to="/todayBooking">今日の予約を表示</Link>
    //   <span> | </span>
    //   <Link to="/createBooking">新規予約を作成</Link>
    // </div>
  );
};
