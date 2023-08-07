import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { createBooking } from "../utils/api";
import { getWeek } from "../utils/date";
import { useRecoilValue } from 'recoil';
// import { useReset } from '../../../hooks/useReset';
import { dateState, hourState, minuteState, nameState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, tableIdState, noteState } from '../atom/state';

export const useCreateBooking = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    // const { reset } = useReset();
    const date = useRecoilValue(dateState);
    const hour = useRecoilValue(hourState);
    const minute = useRecoilValue(minuteState);
    const name = useRecoilValue(nameState);
    const numberOfAdults = useRecoilValue(numberOfAdultsState);
    const numberOfChildren = useRecoilValue(numberOfChildrenState);
    const bookingCategoryId = useRecoilValue(bookingCategoryIdState);
    const tableId = useRecoilValue(tableIdState);
    const note = useRecoilValue(noteState);

    const create = async () => {
        const week = getWeek(date);
        const data = {
            booking: {
                date,
                week,
                time: `${hour}:${minute}`,
                name,
                number_of_adults: numberOfAdults,
                number_of_children: numberOfChildren,
                booking_category_id: bookingCategoryId,
                note,
            },
            table: {
                id: [tableId],
            },
        };
        const res = await createBooking(data);
        if (res.status === "SUCCESS") {
            showMessage({ title: "予約の作成に成功しました", status: "success" });
            navigate("/allBooking");
            // reset();
        } else {
            showMessage({ title: "予約の作成に失敗しました", status: "error" });
        }
    };
    return { create };
};
