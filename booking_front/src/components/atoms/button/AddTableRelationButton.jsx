import React, { useState } from "react";
import { Box, Button, Select } from "@chakra-ui/react";



import { useAddTableRelation } from "../../../hooks/useAddTabelRelation";

export const AddTableRelationButton = (props) => {
  const { bookingId } = props;
  const { addTable } = useAddTableRelation();


  const tableNum = [
    { id: 1, name: "1番" },
    { id: 2, name: "2番" },
    { id: 3, name: "3番" },
    { id: 5, name: "5番" },
    { id: 11, name: "11番" },
    { id: 12, name: "12番" },
    { id: 13, name: "13番" },
    { id: 14, name: "14番" },
    { id: 15, name: "15番" },
    { id: 16, name: "16番" },
    { id: 21, name: "21番" },
  ];

  const [tableId, setTableId] = useState(1);

  const onClickAddTableRelation = () => {
    addTable(bookingId, tableId);
  }

  return (
    <Box display={"flex"}>
      <Select bg={"white"} w={"100px"} value={tableId} onChange={(e) => setTableId(e.target.value)}>
        {tableNum.map((table) => (
          <option key={table.id} value={table.id}>
            {table.name}
          </option>
        ))}
      </Select>
      <Button bg={"gray.100"} onClick={onClickAddTableRelation}>席を割り振る</Button>
    </Box>
  );
};
