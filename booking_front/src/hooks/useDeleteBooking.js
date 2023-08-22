import { useSetRecoilState } from "recoil";
import { useMessage } from "../hooks/useMessage";
import {
    deleteBooking,
    getAllBooking,
    getTables,
} from "../utils/api";
import { today } from "../utils/date";
import {
    allBookingState,
    todayBookingState,
    noAssignedBookingState,
    tableState,
} from "../atom/state";
import { useNavigate } from "react-router-dom";


export const useDeleteBooking = () => {
    const setAllBooking = useSetRecoilState(allBookingState);
    const setTodayBooking = useSetRecoilState(todayBookingState);
    const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);
    const setTables = useSetRecoilState(tableState);
    const { showMessage } = useMessage();
    const navigate = useNavigate();


    const destroy = async (bookingId) => {
        const data = {
            booking: {
                id: bookingId,
            },
        };

        await deleteBooking(data);
        const allBooking = await getAllBooking();
        const todayBooking = allBooking.filter(
            (booking) => booking.date === today()
        );
        const noAssigendBooking = todayBooking.filter((booking) => {
            return booking.tables.length === 0;
        });
        setNoAssigendBooking(noAssigendBooking);
        setAllBooking(allBooking);
        setTodayBooking(todayBooking);
        const tables = await getTables();
        tables.sort((a, b) => {
            return a.id - b.id;
        });
        setTables(tables);
        showMessage({ title: "予約を削除しました", status: "success" });
        navigate("/todayBooking");
    };
    return { destroy }
}

