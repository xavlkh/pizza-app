import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";

const pizzaList = pizzaData.map((pizza, i) => (
  <li key={"pizza_" + i}>
    {pizza}
    {console.log({ ...pizza })}
  </li>
));

function Header() {
  return <h1 className=''>Andy's Pizza Co.</h1>;
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Spinach Pizza' />
      <h3>Spinach Pizza</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <p>10</p>
    </div>
  );
}

function Menu() {
  // for (const [key, value] of Object.entries(pizzaData))
  const pizzaList = pizzaData.map((pizza, i) => (
    <div>
      <h3 key={"name_" + i}>{pizza.name}</h3>
      <h3 key={"ingredients_" + i}>{pizza.ingredients}</h3>
      <h3 key={"price_" + i}>{pizza.price}</h3>
      {/* <img key={"photoName_" + i}>{pizza.photoName}</img> */}
    </div>
  ));
}

function Footer() {
  const hours = new Date().getHours();
  return (
    <footer className='footer'>
      {hours >= 10 && hours <= 22
        ? "We're currently open"
        : "Sorry we're closed"}
    </footer>
  );
}

function App() {
  return (
    <Pizza />
    // <div>
    //   <Header />
    //   <Pizza />
    //   <Pizza />
    // </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
