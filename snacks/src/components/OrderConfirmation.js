// OrderConfirmation.js
import React from "react";

function OrderConfirmation({ name }) {
  return (
    <div>
      <h2>Please wait for your order!</h2>
      <p>Your server will call your name ({name}) when it's ready.</p>
    </div>
  );
}

export default OrderConfirmation;