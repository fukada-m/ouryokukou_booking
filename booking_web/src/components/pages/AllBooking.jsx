import React, { useEffect, useState } from "react";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Box, Stack, Wrap, WrapItem, Heading, Text } from "@chakra-ui/react";

import { AddTableRelationButton } from "../atoms/button/AddTableRelationButton";
import { RemoveTableRelationButton } from "../atoms/button/RemoveTableRelationButton";
import { getAllBooking } from "../../utils/api";
import {
  allBookingState,
  buttonDispState,
  optionDispState,
} from "../../atom/state";

export const AllBooking = () => {
  const [allBooking, setAllBooking] = useRecoilState(allBookingState);
  const buttonDisp = useRecoilValue(buttonDispState);
  const setOptionDisp = useSetRecoilState(optionDispState);

  const fetchAllBooking = async () => {
    setAllBooking(await getAllBooking());
  };

  useEffect(() => {
    fetchAllBooking();
    setOptionDisp({
      delete: true,
      edit: true,
      addTable: true,
      removeTable: true,
      moveTable: false,
    });
  }, []);

  return (
    <>
      <Heading as="h1" fontSize={{ base: "lg", md: "xl" }}>
        予約一覧
      </Heading>
      {allBooking.length === 0 && <h2>予約はまだありません</h2>}
      <Wrap p={{ base: 4, md: 6 }}>
        {allBooking.map((booking) => (
          <WrapItem mx="auto">
            <Box
              w="200px"
              h="100%"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={1}
              key={booking.id}
            >
              <Stack textAlign="center">
                <p>
                  {booking.date}({booking.week})
                </p>
                <p>{booking.time}</p>
                <p>{booking.name}</p>
                <p>
                  大人{booking.number_of_adults}人 子供
                  {booking.number_of_children}人
                </p>
                <Text
                  color={
                    booking.booking_category.name === "LINE" && "green.500"
                  }
                >
                  {booking.booking_category.name}
                </Text>
                {booking.tables.map((table, index) => (
                  <div key={index}>
                    <p>{table.name}</p>
                  </div>
                ))}
                <p>{booking.note}</p>
                {buttonDisp.delete && (
                  <DeleteButton bookingId={booking.id} table={null} />
                )}
                {buttonDisp.addTable && (
                  <AddTableRelationButton bookingId={booking.id} />
                )}
                {buttonDisp.removeTable && (
                  <RemoveTableRelationButton
                    bookingId={booking.id}
                    tableNum={booking.tables}
                  />
                )}
                {buttonDisp.edit && (
                  <Link to={`/editBooking/${booking.id}`}>編集</Link>
                )}
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
