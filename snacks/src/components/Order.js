// Order.js
import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SnackOrBoozeApi from "../Api";
import "./Order.css";

function Order() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [name, setName] = useState("");
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {

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
       
        if (selectedItems.length === 0) {
          alert("Please add items to your order.");
          return;
        }
        if (!name.trim()) {
          alert("Please provide your name.");
          return;
        }
  
        const order = {
          customerName: name,
          items: selectedItems.map((item) => item.name),
        };
      
        console.log("Placing order:", order);
      
        alert(`Thank you, ${name}! Your order has been placed.`);
        setSelectedItems([]);
        setName("");
      };


    return (
      <div className="outer-box">
      <div className="order-container">
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
              {snack.name} {" "}
              <Button onClick={() => handleAddItem(snack)}>Add to Order</Button>
            </li>
          ))}
        </ul>
<br></br>
        <h3>Available Drinks</h3>
        <ul>
          {drinks.map((drink) => (
            <li key={drink.id}>
              {drink.name} {" "}
              <Button onClick={() => handleAddItem(drink)}>Add to Order</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Order;
