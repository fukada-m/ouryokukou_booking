import React from 'react'
import { Routes, Route } from "react-router-dom";

import { AllBooking } from '../components/pages/AllBooking';
import { TodayBooking } from '../components/pages/TodayBooking';
import { CreateBooking } from '../components/pages/CreateBooking';
import { UpdateBooking } from '../components/pages/UpdateBooking';
import { Top } from '../components/pages/Top';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { FooterLayout } from '../components/templates/FooterLayout';

const routes = [
    {
        path: "/allBooking",
        element: <AllBooking />
    },
    {
        path: "/todayBooking",
        element: <TodayBooking />
    },
    {
        path: "/createBooking",
        element: <CreateBooking />
    },
    {
        path: "/editBooking/booking/:bookingId/table/:tableId",
        element: <UpdateBooking />
    },
    {
        path: "*",
        element: <Page404 />
    }

]

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Top />}></Route>
            <Route path='/login' element={<Login />}></Route>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<><HeaderLayout>{route.element}</HeaderLayout><FooterLayout /></>} />
            ))}
        </Routes>
    )
}
