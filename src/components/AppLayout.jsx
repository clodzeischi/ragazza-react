import NavBar from "./NavBar.jsx";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <NavBar color='dark' dark expand='md' fixed='top' full='true' />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout;