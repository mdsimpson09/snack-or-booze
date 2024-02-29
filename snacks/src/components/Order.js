// Order.js
import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SnackOrBoozeApi from "../Api";


function Order() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [name, setName] = useState("");
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            // Fetch snacks and drinks from the API
            const snacks = await SnackOrBoozeApi.getSnacks();
            const drinks = await SnackOrBoozeApi.getDrinks();
            setSnacks(snacks);
            setDrinks(drinks);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);

      const handleAddItem = (item) => {
        setSelectedItems([...selectedItems, item]);
      };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };

      const handlePlaceOrder = () => {
        // Check if there are selected items and a customer name
        if (selectedItems.length === 0) {
          alert("Please add items to your order.");
          return;
        }
        if (!name.trim()) {
          alert("Please provide your name.");
          return;
        }
      
        // Construct the order object
        const order = {
          customerName: name,
          items: selectedItems.map((item) => item.name),
        };
      
        // Perform any necessary actions (e.g., sending order data to a backend server)
        console.log("Placing order:", order);
      
        // Show a confirmation message
        alert(`Thank you, ${name}! Your order has been placed.`);
      
        // Reset selectedItems and name after placing the order
        setSelectedItems([]);
        setName("");
      };

  return (
    <div>
    <h2>Your Order</h2>
    <ul>
      {selectedItems.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <Button onClick={handlePlaceOrder}>Place Order</Button>
    </Form>

    <h3>Available Snacks</h3>
    <ul>
      {snacks.map((snack) => (
        <li key={snack.id}>
          {snack.name} -{" "}
          <Button onClick={() => handleAddItem(snack)}>Add to Order</Button>
        </li>
      ))}
    </ul>

    <h3>Available Drinks</h3>
    <ul>
      {drinks.map((drink) => (
        <li key={drink.id}>
          {drink.name} -{" "}
          <Button onClick={() => handleAddItem(drink)}>Add to Order</Button>
        </li>
      ))}
    </ul>
  </div>
);
}


export default Order;
