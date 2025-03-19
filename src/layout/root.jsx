import useBootstrapUtils from '../hooks/useBootstrapUtils'
import Header from '../components/shared/header/Header'
import NavigationManu from '../components/shared/navigationMenu/NavigationMenu'
import SupportDetails from '../components/supportDetails'
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LoginMinimal from '../pages/login-minimal'
import LayoutAuth from './layoutAuth'

const RootLayout = () => {
    const pathName = useLocation().pathname
    useBootstrapUtils(pathName)

    const [cookies, setCookies] = useCookies(['token', 'id', 'name']);
    
    return (
        <>
            {
                cookies.token ? 
                    <>
                        <Header />
                        <NavigationManu />
                        <main className="nxl-container">
                            <div className="nxl-content">
                                <Outlet />
                            </div>
                        </main>
                        <SupportDetails />
                    </>
                    :
                    <>
                        <Navigate to="/login" />
                    </>
            }   
        </>
    )
}

export default RootLayout