import React, { useEffect, useState } from "react";
import { Box, Button, Select } from "@chakra-ui/react";

import { useRemoveTableRelation } from "../../../hooks/useRemoveTableRelation";

export const RemoveTableRelationButton = (props) => {
  const { bookingId, tableId } = props;
  const { removeTable } = useRemoveTableRelation();

  const onClickRemoveTableRelation = async () => {
    removeTable(bookingId, tableId);
  };


  return (
    <Button fontSize={"2xl"} bg={"white"} onClick={onClickRemoveTableRelation}>席を解除</Button>
  );
};
