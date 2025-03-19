import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";   
import LayoutAuth from "../layout/layoutAuth";
import LoginMinimal from "../pages/login-minimal";
import React from "react";
import VolunteerList from "../pages/volunteerList";
import HelpList from "../pages/helpList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "Volunteers/List",
                element: <VolunteerList />
            },
            {
                path: "help/list",
                element: <HelpList />
            }
        ]
    },
    {
        path: "/",
        element: <LayoutAuth />,
        children: [
            {
                path: "login",
                element: <LoginMinimal />
            }
        ]
    }
])