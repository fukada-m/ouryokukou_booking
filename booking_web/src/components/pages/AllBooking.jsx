import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  Box,
  Stack,
  Wrap,
  WrapItem,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react";
import { getAllBooking } from "../../utils/api";
import { allBookingState, buttonDispState, optionDispState } from "../../atom/state";
import { MainHeading } from "../atoms/heading/MainHeading";
import { BookingContents } from "../molecules/BookingContents";
import { OptionButtonCollection } from "../molecules/OptionButtonCollection";

export const AllBooking = () => {
  const [allBooking, setAllBooking] = useRecoilState(allBookingState);
  const setOptionDisp = useSetRecoilState(optionDispState);
  const setButtonDisp = useSetRecoilState(buttonDispState);
  const [loading, setLoading] = useState(false);

  const fetchAllBooking = async () => {
    setLoading(true);
    setAllBooking(await getAllBooking());
    setLoading(false);
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
      <MainHeading>予約一覧</MainHeading>
      {loading && <p>読み込み中です...</p>}
      {loading === false && allBooking.length === 0 && (
        <Heading p={5} fontSize={"lg"}>
          予約が0件です
        </Heading>
      )}
      <Wrap p={{ base: 4, md: 6 }}>
        {allBooking.map((booking) => (
          <WrapItem key={booking.id}>
            <Box
              w="200px"
              h="100%"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={1}
            >
              <Stack textAlign="center">
                <BookingContents booking={booking} />
                {booking.tables.map((table, index) => (
                  <div key={index}>
                    <Text fontSize={"lg"}>{table.name}</Text>
                  </div>
                ))}
                <OptionButtonCollection booking={booking} />
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
