import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";

const pizzaSource = pizzaData.map((pizza) => {
  return (
    <div className='pizza'>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <p>{pizza.price}</p>
    </div>
  );
});

const Footer = () => {
  const hours = new Date().getHours();
  return (
    <footer className='footer'>
      {hours >= 10 && hours <= 22
        ? "We're currently open"
        : "Sorry we're closed"}
    </footer>
  );
};

const Menu = () => {
  return (
    <div className='menu'>
      <header className='header'>
        <h1>Andy's Pizza Co.</h1>
      </header>
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
      <div className='pizzas'>{pizzaSource}</div>
      <Footer />
      <button className='order btn'>Order</button>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <Menu />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
