import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/application'>Apply</Link>
        </nav>
    )
}

export default NavBar;