import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let snacks = items.find(snacks => snacks.id === id);
  if (!snacks) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className=" menu-item font-weight-bold text-center">
            {snacks.name}
          </CardTitle>
          <CardText className="font-italic">{snacks.description}</CardText>
          <p>
            <b>Recipe:</b> {snacks.recipe}
          </p>
          <p>
            <b>Serve:</b> {snacks.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
