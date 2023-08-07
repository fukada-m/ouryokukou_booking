import React, { useEffect, useState } from "react";
import { Box, Button, Select } from "@chakra-ui/react";

import { useRemoveTableRelation } from "../../../hooks/useRemoveTableRelation";

export const RemoveTableRelationButton = (props) => {
  const { bookingId, tableNum } = props;
  const [table, setTable] = useState();
  const { removeTable } = useRemoveTableRelation();

  const onClickRemoveTableRelation = async () => {
    removeTable(bookingId, table);
  };

  useEffect(() => {
    if (tableNum.length > 0) {
      setTable(tableNum[0].id);
    }
  }, []);

  return (
    <>
      {tableNum.length > 0 && (
        <Box display={"flex"}>
          <Select
            w={"100px"}
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            {tableNum.map((table) => (
              <option key={table.id} value={table.id}>
                {table.name}
              </option>
            ))}
          </Select>
          <Button onClick={onClickRemoveTableRelation}>席を解除</Button>
        </Box>
      )}
    </>
  );
};
