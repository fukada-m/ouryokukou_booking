import React from 'react'
import { Routes, Route } from "react-router-dom";

import { AllBooking } from '../components/pages/AllBooking';
import { TodayBooking } from '../components/pages/TodayBooking';
import { CreateBooking } from '../components/pages/CreateBooking';
import { UpdateBooking } from '../components/pages/UpdateBooking';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';

const routes = [
    {
        path: "/",
        element: <Login />
    },
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
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}
