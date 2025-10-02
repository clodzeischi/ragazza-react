import NavBar from "./NavBar.jsx";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <NavBar color='dark' dark expand='md' />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout;