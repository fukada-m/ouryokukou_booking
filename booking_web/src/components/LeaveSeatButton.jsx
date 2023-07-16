import React from 'react'
import { axiosInstance } from '../utils/axios'

export const LeaveSeatButton = (props) => {
    const { tableId, setTables } = props;
    const leaveSeat = async () => {
        const data = {
            table: {
                id: tableId,
            },
        };
        try {
            const res = await axiosInstance.put("/api/is_seated_false", data);
            console.log(res.data);
            const fetchTables = await axiosInstance.get("/api/get_all_tables");
            setTables(fetchTables.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        <button onClick={leaveSeat}>会計</button>
    </div>
  )
}

