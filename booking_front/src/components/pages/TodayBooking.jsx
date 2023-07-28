import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { SelectedBooking } from "../organisms/SelectedBooking";
import { NoAssignedBooking } from "../organisms/NoAssignedBooking";
import { LeaveSeatButton } from "../atoms/button/LeaveSeatButton";
import { SitSeatButton } from "../atoms/button/SitSeatButton";
import { MainHeading } from "../atoms/heading/MainHeading";
import {
  noAssignedBookingState,
  tableState,
  optionDispState,
  buttonDispState,
} from "../../atom/state";
import { useFetchTodayBooking } from "../../hooks/useFetchTodayBooking";

export const TodayBooking = () => {
  const [tables, setTables] = useRecoilState(tableState);
  const setOptionDisp = useSetRecoilState(optionDispState);
  const setButtonDisp = useSetRecoilState(buttonDispState);
  const noAssigendBooking = useRecoilValue(noAssignedBookingState);
  const { fetch } = useFetchTodayBooking();
  const [loading, setLoading] = useState(false);


  const fetchTodayBooking = async () => {
  };

  useEffect( () => {
    setLoading(true);
    const fetchData = async () => {
      await fetch();
      await fetchTodayBooking();
    };
    fetchData().then(() => {
      setLoading(false);
    });
    setOptionDisp({
      delete: true,
      edit: true,
      addTable: true,
      removeTable: false,
      moveTable: true,
    });
    setButtonDisp({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: false,
    });


  }, []);

  return (
    <>
      <MainHeading>今日の予約</MainHeading>
      {loading && <p>読み込み中です...</p>}
      <Wrap p={{ base: 4, md: 6 }} justify={{ base: "center", md: "left" }}>
        {tables.map((table) => (
          <WrapItem key={table.id}>
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
      <Wrap p={{ base: 4, md: 6 }} justify={{ base: "center", md: "left" }}>
        {noAssigendBooking.map((booking) => (
          <WrapItem key={booking.id}>
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
