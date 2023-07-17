import React from 'react'
import { leaveSeat } from '../utils/api';

export const LeaveSeatButton = (props) => {
    const { tableId, setTables } = props;

    const onClickLeaveSeat = async () => {
        const data = {
            table: {
                id: tableId,
            },
        };
        setTables(await leaveSeat(data))
    };

  return (
    <div>
        <button onClick={onClickLeaveSeat}>会計</button>
    </div>
  )
}

