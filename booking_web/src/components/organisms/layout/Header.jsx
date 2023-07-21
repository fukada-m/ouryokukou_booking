import React from "react";
import { Flex, Button, Heading, Link, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
        <Box display={{ base: "none", md: "block" }}>
          <Button>予約を削除</Button>
          <Button>席を追加</Button>
          <Button>席を削除</Button>
          <Button>編集</Button>
          <Button>席の移動</Button>
          <Button>来店</Button>
        </Box>
        <IconButton
          aria-label="オプションボタン"
          icon={<HamburgerIcon />}
          size="lg"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">予約を削除</Button>
              <Button w="100%">席を追加</Button>
              <Button w="100%">席を削除</Button>
              <Button w="100%">編集</Button>
              <Button w="100%">席の移動</Button>
              <Button w="100%">来店</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
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
