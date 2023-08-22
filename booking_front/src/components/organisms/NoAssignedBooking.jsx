import React from "react";
import { Text, chakra } from "@chakra-ui/react";

import { BookingContents } from "../molecules/BookingContents";
import { Link as RouterLink } from "react-router-dom";
import { OptionButtonCollection } from "../molecules/OptionButtonCollection";

export const NoAssignedBooking = (props) => {
  const { booking } = props;
  const Link = chakra(RouterLink);



  return (
    <div>
      <Text fontSize={"lg"} m={2}>
        席が未定
      </Text>
      <BookingContents booking={booking} />
      <Link
        fontSize="lg"
        fontWeight={"bold"}
        bg={"gray.100"}
        py={1}
        px={3}
        borderRadius={"10px"}
        to={`/editBooking/booking/${booking.id}/table/0`}
      >
        編集
      </Link>
    </div>
  );
};
