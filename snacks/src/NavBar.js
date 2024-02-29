// import React from "react";
// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import { Navbar, Nav, NavItem } from "reactstrap";

// function NavBar() {
//   return (
//     <div>
//       <Navbar expand="md">
//         <NavLink exact to="/" className="navbar-brand">
//           Snack or Booze
//         </NavLink>

//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             <NavLink to="/snacks">Snacks</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/drinks">Drinks</NavLink>
//           </NavItem>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;
import React from "react";
import "./NavBar.css";
import { NavLink as RouterNavLink } from "react-router-dom"; // Alias to avoid naming conflict
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"; // Import NavLink from reactstrap

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
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
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;