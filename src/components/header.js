import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
        <div className="container">
            <NavbarBrand href="/">Recipe Finder</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/food">Food</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/drinks">Drinks</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default Header;