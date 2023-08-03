import { nameState, dateState, hourState, minuteState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, noteState } from "../atom/state";
import { getAllBooking } from "../utils/api";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";


export const useFetchBooking = () => {
    const { id } = useParams();
    const setDate = useSetRecoilState(dateState);
    const setHour = useSetRecoilState(hourState);
    const setMinute = useSetRecoilState(minuteState);
    const setName = useSetRecoilState(nameState);
    const setNumberOfAdults = useSetRecoilState(numberOfAdultsState);
    const setNumberOfChildren = useSetRecoilState(numberOfChildrenState);
    const setBookingCategoryId = useSetRecoilState(bookingCategoryIdState);
    const setNote = useSetRecoilState(noteState);

    const fetchBooking = async () => {
        const allBooking = await getAllBooking();
        const booking = allBooking.find((booking) => booking.id === Number(id));
        setDate(booking.date);
        setHour(booking.time.slice(0, 2));
        setMinute(booking.time.slice(3, 5));
        setName(booking.name);
        setNumberOfAdults(booking.number_of_adults);
        setNumberOfChildren(booking.number_of_children);
        if (booking.booking_category.id === 1) {
            setBookingCategoryId("1");
        } else {
            setBookingCategoryId("2");
        }
        setNote(booking.note);
    };
    return { fetchBooking };
}
