import useBootstrapUtils from '../hooks/useBootstrapUtils'
import Header from '../components/shared/header/Header'
import NavigationManu from '../components/shared/navigationMenu/NavigationMenu'
import SupportDetails from '../components/supportDetails'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const RootLayout = () => {
    const pathName = useLocation().pathname
    useBootstrapUtils(pathName)

    return (
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
    )
}

export default RootLayout