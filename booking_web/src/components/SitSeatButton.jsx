import React from "react";
import { sitSeat } from "../utils/api";

export const SitSeatButton = (props) => {
  const { tableId, setTables } = props;
  
  const onClickSitSeat = async () => {
    const data = {
      table: {
        id: tableId,
      },
    };
    setTables(await sitSeat(data));
  };

  return (
    <div>
      <button onClick={onClickSitSeat}>来店</button>
    </div>
  );
};
