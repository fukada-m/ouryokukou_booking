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



