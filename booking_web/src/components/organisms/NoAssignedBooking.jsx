import React from "react";
import { Text, Link } from "@chakra-ui/react";

import { DeleteButton } from "../atoms/button/DeleteButton";
import { AddTableRelationButton } from "../atoms/button/AddTableRelationButton";
import { useRecoilValue } from "recoil";
import { noAssignedBookingState, buttonDispState } from "../../atom/state";
import { BookingContents } from "../molecules/BookingContents";
import { OptionButtonCollection } from "../molecules/OptionButtonCollection";

export const NoAssignedBooking = (props) => {
  const { booking } = props;

  return (
    <div>
      <Text fontSize={"lg"} m={2}>席が未定</Text>
      <BookingContents booking={booking} />
      <OptionButtonCollection booking={booking} />
    </div>
  );
};
