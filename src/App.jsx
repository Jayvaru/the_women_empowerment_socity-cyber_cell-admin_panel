import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import 'react-quill/dist/quill.snow.css';
import 'react-circular-progressbar/dist/styles.css';
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import NavigationProvider from './contentApi/navigationProvider';
import SideBarToggleProvider from './contentApi/sideBarToggleProvider';
import ThemeCustomizer from './components/shared/ThemeCustomizer';
import { CookiesProvider } from 'react-cookie';

const App = () => {

  return (
    <>
      <CookiesProvider>
        <NavigationProvider>
          <SideBarToggleProvider>
            <RouterProvider router={router} />:
          </SideBarToggleProvider>
        </NavigationProvider>
      </CookiesProvider>
    </>
  )
}

export default App