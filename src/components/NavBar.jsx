import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {Link} from "react-router-dom";
import myLogo from '../assets/logo_hi.png';

const NavBar = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand tag={Link} to="/" className='me-3'>
                    <img
                        alt="logo"
                        src={myLogo}
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 50,
                            marginRight: 10
                        }}
                    />
                    Ragazza Di Campagna
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem className='me-3'>
                            <Link to="/menu">Menu</Link>
                        </NavItem>
                        <NavItem className='me-3'>
                            <Link to='/application'>
                                Application
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;