import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from 'bootstrap'
import './assets/scss/theme.scss'
import React from 'react'
createRoot(document.getElementById('root')).render(
    <App />
)
