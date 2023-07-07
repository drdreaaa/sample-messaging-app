import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login/Login.tsx'
import Dashboard from './components/dashboard/Dashboard.tsx'
import Preferences from './components/preferences/Preferences.tsx'
import AuthProvider from './contexts/AuthProvider.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // loader: rootLoader,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//         // loader: teamLoader,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         // loader: teamLoader,
//       },
//       {
//         path: "preferences",
//         element: <Preferences />,
//         // loader: teamLoader,
//       },
//       {
//         path: "login",
//         element: <Login />,
//         // loader: teamLoader,
//       },
//     ],
//   }
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
