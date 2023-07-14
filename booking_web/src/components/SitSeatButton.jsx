import React from 'react'
import { axiosInstance } from '../utils/axios'

export const SitSeatButton = (props) => {
    const { tableId, setTables } = props;
    const sitSeat = async () => {
        const data = {
            table: {
                id: tableId,
            },
        };
        try {
            const res = await axiosInstance.put("/api/is_seated_true", data);
            console.log(res.data);
            const fetchTables = await axiosInstance.get("/api/get_all_tables");
            setTables(fetchTables.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        <button onClick={sitSeat}>着席</button>
        </div>
  )
}

