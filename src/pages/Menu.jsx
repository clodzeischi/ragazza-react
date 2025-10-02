import MenuTable from "../components/MenuTable";
import menuItems from '../utils/menuitems';

const Menu = () => {
    return (
        <div >
            <h2>Menu</h2>
            <MenuTable items={menuItems} />
        </div>
    )
}

export default Menu;