// import React from "react";
// import { Link } from "react-router-dom";
// import "./DrinkMenu.css"
// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardText,
//   ListGroup,
//   ListGroupItem,
// } from "reactstrap";

// function DrinkMenu({ drinks }) {
//   return (
//     <section className="col-md-4">
//       <Card>
//         <CardBody>
//           <CardTitle className="font-weight-bold text-center">Drink Menu</CardTitle>
//           <CardText>Explore our drink options:</CardText>
//           <ListGroup>
//             {drinks.map((drink) => (
//               <Link to={`/drinks/${drink.id}`} key={drink.id}>
//                 <ListGroupItem>{drink.name}</ListGroupItem>
//               </Link>
//             ))}
//           </ListGroup>
//         </CardBody>
//       </Card>
//     </section>
//   );
// }

// export default DrinkMenu;

import React from "react";
import { Link } from "react-router-dom";
import "./DrinkMenu.css"; // Ensure the CSS file name matches
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
function DrinkMenu({ items }) {
  const itemsList = items && Array.isArray(items) ? (
    items.map(item => (
      <Link to={`/drinks/${item.id}`} key={item.id}> 
        <ListGroupItem>{item.name}</ListGroupItem>
      </Link>
    ))
  ) : (
    <ListGroupItem>Loading drinks...</ListGroupItem> 
  );

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">Drink Menu</CardTitle>
          <CardText>Explore our drink options:</CardText>
          <ListGroup>
            {itemsList}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkMenu;