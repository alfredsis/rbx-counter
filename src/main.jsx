import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './auth/LoginPage'
import { CounterApp } from './counter/CounterApp'
import { DarkMode } from './components/DarkMode/DarkMode'
import { Timer } from './components/Timer/Timer'




// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <LoginPage />
//   },
//   {
//     path: '/counter',
//     element: <CounterApp />
//   },
//   {
//     path: '/',
//     element: <h1>hola</h1>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <DarkMode/>
    <CounterApp/>
    <Timer/>
    
    

  </React.StrictMode>,
)
