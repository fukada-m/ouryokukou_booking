import { moveSeat } from "../utils/api";
import { useSetRecoilState } from "recoil";
import { todayBookingState } from "../atom/state";
import { useMessage } from "../hooks/useMessage";

export const useMoveSeat = () => {
    const setTodayBooking = useSetRecoilState(todayBookingState);
    const { showMessage } = useMessage();

    const move = async (bookingId, table, tableId) => {
        const removeData = {
            table: {
                id: tableId,
            },
            booking: {
                id: bookingId,
            },
        };
        const addData = {
            table: {
                id: table,
            },
            booking: {
                id: bookingId,
            },
        };
        setTodayBooking(await moveSeat(addData, removeData));
        showMessage({ title: "席を移動しました", status: "success" });
    }
    return { move }
}
