import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import Home from '../pages/home';
import LoginMinimal from '../pages/login-minimal';
import { useState } from 'react';
import { useEffect } from 'react';
import RootLayout from './root';

const LayoutAuth = () => {
    const [cookies, setCookies] = useCookies(['token', 'id', 'name']);

    return (
        <>
            {cookies.token ?
                <Navigate to="/" /> :

                <Outlet />
            }
        </>
    )
}

export default LayoutAuth