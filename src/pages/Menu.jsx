import MenuTable from "../components/MenuTable";
import menuItems from '../utils/menuitems';

const Menu = () => {
    return (
        <>
            <MenuTable items={menuItems} />
        </>
    )
}

export default Menu;