import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Splash from "./pages/Splash.jsx";
import Menu from "./pages/Menu.jsx";
import Hiring from "./pages/Hiring.jsx";
import Error from "./pages/Error.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {path: 'splash', element: <Splash />},
            {path: 'menu', element: <Menu />},
            {path: 'hiring', element: <Hiring />},
            {index: true, element: <Splash />},
            {path: "*", element: <Error />}
        ]
    }])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)


