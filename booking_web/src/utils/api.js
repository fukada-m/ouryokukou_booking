import { axiosInstance } from '../utils/axios'

export const getAllBooking = async () => {
    try {
        const res = await axiosInstance.get('/api/get_all_booking');
        return res.data;
    } catch (error) {
    console.error(error);
    }
}

export const createBooking = async (data) => {
    try {
        const res = await axiosInstance.post('/api/create_booking', data);
        return res.data;
    } catch (error) {
    console.error(error);
    }
}

export const getTables = async () => {
    try {
        const res = await axiosInstance.get("/api/get_all_tables");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

