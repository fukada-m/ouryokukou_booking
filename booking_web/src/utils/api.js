import { axiosInstance } from '../utils/axios'
import { today } from '../utils/date'

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

export const updateBooking = async (data) => {
    try {
        const res = await axiosInstance.put("/api/update_booking", data);
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

export const moveSeat = async (addData, removeData) => {
    try {
        await axiosInstance.put("/api/add_table_relation", addData);
        await axiosInstance.put("/api/remove_table_relation", removeData);
        const allBooking = await axiosInstance.get("/api/get_all_booking");
        const todayBooking = allBooking.data.filter(
            (booking) => booking.date === today()
        );
        return todayBooking;
    } catch (error) {
        console.error(error);
    }
};

export const addTableRelation = async (data) => {
    try {
        await axiosInstance.put("/api/add_table_relation", data);
    } catch (error) {
        console.error(error);
    }
}
