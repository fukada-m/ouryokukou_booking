import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  Box,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { today } from "../../utils/date";
import { getAllBooking, getTables } from "../../utils/api";
import { SelectedBooking } from "../organisms/SelectedBooking";
import { NoAssignedBooking } from "../organisms/NoAssignedBooking";
import { LeaveSeatButton } from "../atoms/button/LeaveSeatButton";
import { SitSeatButton } from "../atoms/button/SitSeatButton";
import { MainHeading } from "../atoms/heading/MainHeading";
import {
  todayBookingState,
  noAssignedBookingState,
  tableState,
  optionDispState,
} from "../../atom/state";

export const TodayBooking = () => {
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const [tables, setTables] = useRecoilState(tableState);
  const setOptionDisp = useSetRecoilState(optionDispState);
  const [noAssigendBooking, setNoAssigendBooking] = useRecoilState(
    noAssignedBookingState
  );

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
    const tables = await getTables();
    tables.sort((a, b) => {
      return a.id - b.id;
    });
    setTables(tables);
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
      <MainHeading>今日の予約</MainHeading>
      <Wrap p={{ base: 4, md: 6 }}>
        {tables.map((table) => (
          <WrapItem key={table.id} >
            <Box
              w="200px"
              h="100%"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={1}
              backgroundColor={table.is_seated && "yellow.200"}
            >
              <Stack textAlign="center">
                <Text fontSize="lg">{table.id}番</Text>
                {table.is_seated == false ? (
                  <SitSeatButton tableId={table.id} setTables={setTables} />
                ) : (
                  <LeaveSeatButton tableId={table.id} setTables={setTables} />
                )}
                <SelectedBooking table={table} />
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Wrap p={{ base: 4, md: 6 }}>
        {noAssigendBooking.map((booking) => (
          <WrapItem key={booking.id} >
            <Box
              w="200px"
              h="100%"
              bg="pink.200"
              borderRadius="10px"
              shadow="md"
              p={1}
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
