import { useSetRecoilState } from "recoil";
import { addTableRelation, getAllBooking, getTables } from "../utils/api";
import { today } from "../utils/date";
import {
    allBookingState,
    todayBookingState,
    noAssignedBookingState,
    tableState,
} from "../atom/state";
import { useMessage } from "../hooks/useMessage";

export const useAddTableRelation = () => {
    const setAllBooking = useSetRecoilState(allBookingState);
    const setTodayBooking = useSetRecoilState(todayBookingState);
    const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);
    const setTables = useSetRecoilState(tableState);

    const { showMessage } = useMessage();

    const addTable = async ( bookingId ,tableId) => {
        const data = {
            booking: {
                id: bookingId,
            },
            table: {
                id: tableId,
            },
        };
        await addTableRelation(data);
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
        const tables = await getTables();
        tables.sort((a, b) => {
            return a.id - b.id;
        });
        setTables(tables);
        showMessage({ title: "席を割り振りました", status: "success" });
    }
    return { addTable }
}
