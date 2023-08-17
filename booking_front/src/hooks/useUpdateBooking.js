import { useNavigate, useParams } from "react-router-dom";
import { useMessage } from "./useMessage";
import { updateBooking } from "../utils/api";
import { getWeek } from "../utils/date";
import { useRecoilValue } from 'recoil';
// import { useReset } from '../../../hooks/useReset';
import { dateState, hourState, minuteState, nameState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, noteState } from '../atom/state';

export const useUpdateBooking = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const { id } = useParams();
    // const { reset } = useReset();
    const date = useRecoilValue(dateState);
    const hour = useRecoilValue(hourState);
    const minute = useRecoilValue(minuteState);
    const name = useRecoilValue(nameState);
    const numberOfAdults = useRecoilValue(numberOfAdultsState);
    const numberOfChildren = useRecoilValue(numberOfChildrenState);
    const bookingCategoryId = useRecoilValue(bookingCategoryIdState);
    const note = useRecoilValue(noteState);

    const update = async () => {
        const week = getWeek(date);
        const data = {
            booking: {
                id,
                week,
                date,
                time: `${hour}:${minute}`,
                name,
                number_of_adults: numberOfAdults,
                number_of_children: numberOfChildren,
                booking_category_id: bookingCategoryId,
                note,
            },
        };
        const res = await updateBooking(data);
        if (res.status === "SUCCESS") {
            showMessage({ title: "予約の更新に成功しました", status: "success" });
            navigate("/allBooking");
        } else {
            showMessage({ title: "予約の更新に失敗しました", status: "error" });
        }
    };
    return { update };
};
