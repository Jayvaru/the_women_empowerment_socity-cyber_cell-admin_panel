import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";   
import LoginCover from "../pages/login-cover";
import LayoutAuth from "../layout/layoutAuth";
import LoginMinimal from "../pages/login-minimal";
import LoginCreative from "../pages/login-creative";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/",
        element: <LayoutAuth />,
        children: [
            {
                path: "/authentication/login/cover",
                element: <LoginCover />
            },
            {
                path: "/authentication/login/minimal",
                element: <LoginMinimal />
            },
            {
                path: "/authentication/login/creative",
                element: <LoginCreative />
            },
        ]
    }
])