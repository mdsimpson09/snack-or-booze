import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items }) { // Instead of { snacks }
  const itemsList = items && Array.isArray(items) ? (
    items.map(item => (
      <Link to={`/snacks/${item.id}`} key={item.id}> 
  <ListGroupItem>{item.name}</ListGroupItem>
</Link>
    ))
  ) : (
    <ListGroupItem>Loading snacks...</ListGroupItem> 
  );

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
           Check out our amazing snack options:
          </CardText>
          <ListGroup>
            {itemsList}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;