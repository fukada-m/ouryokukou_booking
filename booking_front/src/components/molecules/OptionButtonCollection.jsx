import React from "react";
import { useRecoilValue } from "recoil";
import { Link as RouterLink } from "react-router-dom";
import { chakra } from "@chakra-ui/react";

import { buttonDispState } from "../../atom/state";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { AddTableRelationButton } from "../atoms/button/AddTableRelationButton";
import { RemoveTableRelationButton } from "../atoms/button/RemoveTableRelationButton";

export const OptionButtonCollection = (props) => {
  const { booking, table } = props;
  const Link = chakra(RouterLink);
  const buttonDisp = useRecoilValue(buttonDispState);

  return (
    <>
      {buttonDisp.delete && (
        <DeleteButton bookingId={booking.id} table={table} />
      )}
      {buttonDisp.addTable && <AddTableRelationButton bookingId={booking.id} />}
      {buttonDisp.removeTable && (
        <RemoveTableRelationButton
          bookingId={booking.id}
          tableNum={booking.tables}
        />
      )}
      {buttonDisp.edit && (
        <Link
          fontSize="lg"
          bg={"gray.100"}
          w={20}
          m="auto"
          borderRadius={"20px"}
          to={`/editBooking/${booking.id}`}
        >
          編集
        </Link>
      )}
    </>
  );
};
