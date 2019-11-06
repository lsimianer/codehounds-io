import React, { useState } from 'react';
import logoBlack from '../../pages/images/logoBlack.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./navbar.css";

const NavCom = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" id="navImg" className="mr-auto"><img id="navImg" src={logoBlack} alt="product"/></NavbarBrand>
            <div id="linkies">
              <NavLink id='noCol' href="/ ">Home</NavLink>
              <NavLink id='noCol' href="/Development">Development</NavLink>
              <NavLink id='noCol' href="/ADA">ADA</NavLink>
              {/* <NavLink id='noCol' href="/Coaches ">Coaches</NavLink>
              <NavLink id='noCol' href="/Education ">Education</NavLink> */} 
            </div>
        <NavbarToggler id='hamburger' onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Development">Development</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ADA ">ADA</NavLink>
            </NavItem>          
          </Nav>
        </Collapse>
        {/* <div id="cartDiv">
        <Link to="/pay"><img id='cartLogo' src={shoppingCart}/><h3 id='cartCount'>0</h3></Link>
        </div> */}        
      </Navbar>
    </div>
  );
}

export default NavCom;