import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import SplashPage from "./pages/SplashPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ApplicationPage from "./pages/ApplicationPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {path: 'splash', element: <SplashPage />},
            {path: 'menu', element: <MenuPage />},
            {path: 'application', element: <ApplicationPage />},
            {index: true, element: <SplashPage />},
            {path: "*", element: <ErrorPage />}
        ]
    }])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)


