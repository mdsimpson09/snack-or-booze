
import React from "react";
import "./NavBar.css";
import { NavLink as RouterNavLink } from "react-router-dom"; // Alias to avoid naming conflict
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"; // Import NavLink from reactstrap

function NavBar() {
  return (
    <div>
      <Navbar className="navbar-brand" expand="md">
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
              Place 
            </NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;