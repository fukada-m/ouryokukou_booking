import React from 'react'
import { Routes, Route } from "react-router-dom";

import { AllBooking } from '../components/pages/AllBooking';
import { TodayBooking } from '../components/pages/TodayBooking';
import { CreateBooking } from '../components/pages/CreateBooking';
import { UpdateBooking } from '../components/pages/UpdateBooking';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';

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
        path: "/editBooking/:id",
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
            <Route path='/' element={<Login />}></Route>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<HeaderLayout>{route.element}</HeaderLayout>} />
            ))}
        </Routes>
    )
}
