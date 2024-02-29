import React, { useState, useEffect } from "react";
import SnackOrBoozeApi from "./Api";
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import FoodMenu from "./components/FoodMenu";
import DrinkMenu from "./components/DrinkMenu";
import Home from "./Home";
import FoodItem from "./components/FoodItem";
import DrinkItem from "./components/DrinkItem"; 
import { Route, Switch } from "react-router-dom";
import OrderConfirmation from "./components/OrderConfirmation";
import Order from "./components/Order";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const drinks = await SnackOrBoozeApi.getDrinks();
        const snacks = await SnackOrBoozeApi.getSnacks();
     
        setSnacks(snacks);
        setDrinks(drinks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
        return <p>Loading &hellip;</p>;
      }


  return (


<div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">

              <FoodMenu items={snacks} title="Snacks" />

            </Route>
            <Route exact path="/drinks">

              <DrinkMenu items={drinks} title="Drinks" />
            </Route>

            <Route path="/snacks/:id">

              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>

            <Route path="/drinks/:id">

          <DrinkItem items={drinks} cantFind="/drinks" />
          </Route>

            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/order-confirmation">
              <OrderConfirmation />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
