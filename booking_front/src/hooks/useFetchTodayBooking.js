import { today } from "../utils/date";
import { getAllBooking, getTables } from "../utils/api";
import { useSetRecoilState } from "recoil";
import { todayBookingState, noAssignedBookingState, tableState } from "../atom/state";

export const useFetchTodayBooking = () => {
    const setTodayBooking = useSetRecoilState(todayBookingState);
    const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);
    const setTables = useSetRecoilState(tableState);

    const fetch = async () => {
        const allBooking = await getAllBooking();
        const todayBooking = allBooking.filter(
            (booking) => booking.date === today()
        );
        setTodayBooking(todayBooking);
        const noAssigendBooking = todayBooking.filter(
            (booking) => booking.tables.length === 0
        );
        setNoAssigendBooking(noAssigendBooking);
        const tables = await getTables();
        tables.sort((a, b) => {
            return a.id - b.id;
        });
        setTables(tables);
    }
    return { fetch }
}
