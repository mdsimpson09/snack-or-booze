
import React from "react";
import "./NavBar.css";
import { NavLink as RouterNavLink } from "react-router-dom"; 
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"; 

function NavBar() {
  return (
    <div>
      <Navbar className="navbar-brand mb-20" expand="md">
        <NavLink to="/" className="navbar-brand" tag={RouterNavLink} exact>
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks" tag={RouterNavLink}>
              Snacks
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/drinks" tag={RouterNavLink}>
              Drinks
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/order" tag={RouterNavLink}>
              Order 
            </NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;