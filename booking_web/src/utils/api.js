import { axiosInstance } from '../utils/axios'

export const getAllBookings = async () => {
    try {
        const res = await axiosInstance.get('/api/get_all_booking');
        console.log(res.data);
        return res.data;
    } catch (error) {
    console.error(error);
    }
}

export const createBooking = async (data) => {
    try {
        const res = await axiosInstance.post('/api/create_booking', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
    console.error(error);
    }
}



