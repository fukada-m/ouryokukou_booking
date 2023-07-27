import React from 'react'
import { Box, FormLabel, Select, flexbox } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { tableIdState } from '../../atom/state';

export const SelectTable = () => {
      const tableNum = [
        { id: "", name: "未定" },
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

    const [tableId, setTableId] = useRecoilState(tableIdState);
  return (
    <Box display={"flex"}>
      <FormLabel fontSize={"2xl"}>卓番</FormLabel>
      <Select
        w={"100px"}
        bg={"white"}
        value={tableId}
        onChange={(e) => setTableId(e.target.value)}
      >
        {tableNum.map((table) => (
          <option key={table.id} value={table.id}>
            {table.name}
          </option>
        ))}
      </Select>
    </Box>
  );
}

