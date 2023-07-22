import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Box, Button, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { today } from "../../utils/date";
import { getAllBooking, getTables } from "../../utils/api";
import { Booking } from "../Booking";
import { NoAssignedBooking } from "../NoAssignedBooking";
import { LeaveSeatButton } from "../LeaveSeatButton";
import { SitSeatButton } from "../SitSeatButton";
import { todayBookingState, noAssignedBookingState, tableState, buttonDispState, optionDispState } from "../../atom/state";


export const TodayBooking = () => {
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const [noAssigendBooking, setNoAssigendBooking] = useRecoilState(
    noAssignedBookingState
  );
  const [tables, setTables] = useRecoilState(tableState);
  const setOptionDisp = useSetRecoilState(optionDispState);


  const fetchTodayBooking = async () => {
    const allBooking = await getAllBooking();
    const todayBooking = allBooking.filter(
      (booking) => booking.date === today()
    );
    setTodayBooking(todayBooking);
    const noAssigendBooking = todayBooking.filter(
      (booking) => booking.tables.length === 0
    );
    setNoAssigendBooking(noAssigendBooking);
    setTables(await getTables());
  };

  useEffect(() => {
    fetchTodayBooking();
    setOptionDisp({
      delete: true,
      edit: true,
      addTable: true,
      removeTable: false,
      moveTable: true,
    });
  }, []);

  return (
    <>
      <Heading as="h1" fontSize={{ base: "lg", md: "xl" }}>
        今日の予約
      </Heading>
      <Wrap p={{ base: 4, md: 6 }}>
        {tables.map((table) => (
          <WrapItem mx="auto">
            <Box
              w="250px"
              h="100%"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={1}
              key={table.id}
              backgroundColor={table.is_seated && "yellow.200"}
            >
              <Stack textAlign="center">
                <Text fontSize="lg">{table.id}番</Text>
                {table.is_seated == false ? (
                  <SitSeatButton tableId={table.id} setTables={setTables} />
                ) : (
                  <LeaveSeatButton tableId={table.id} setTables={setTables} />
                )}
                <Booking table={table} />
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Wrap p={{ base: 4, md: 6 }}>
          {noAssigendBooking.map((booking) => (
        <WrapItem mx="auto">
            <Box
              w="200px"
              h="100%"
              bg="gray.200"
              borderRadius="10px"
              shadow="md"
              p={1}
              key={booking.id}
            >
              <Stack textAlign="center">
              <NoAssignedBooking booking={booking} />
              </Stack>
            </Box>
        </WrapItem>
          ))}
      </Wrap>
    </>
  );
};
