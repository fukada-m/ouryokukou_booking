import { useSetRecoilState } from "recoil";
import { today } from "../utils/date";
import { removeTableRelation, getAllBooking } from "../utils/api";
import {
    allBookingState,
    todayBookingState,
    noAssignedBookingState,
} from "../atom/state";
import { useMessage } from "../hooks/useMessage";


export const useRemoveTableRelation = () => {
    const setAllBooking = useSetRecoilState(allBookingState);
    const setTodayBooking = useSetRecoilState(todayBookingState);
    const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);
    const { showMessage } = useMessage();

    const removeTable = async (bookingId, table) => {
        const data = {
            booking: {
                id: bookingId,
            },
            table: {
                id: table,
            },
        };
        await removeTableRelation(data);
        const allBooking = await getAllBooking();
        setAllBooking(allBooking);
        const todayBooking = allBooking.filter(
            (booking) => booking.date === today()
        );
        setTodayBooking(todayBooking);
        const noAssigendBooking = todayBooking.filter((booking) => {
            return booking.tables.length === 0;
        });
        setNoAssigendBooking(noAssigendBooking);
        
        showMessage({ title: "席を解除しました", status: "success" });
    }
    return { removeTable }
}

