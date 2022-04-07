import "./App.css";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [state, setstate] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((resp) => setstate(resp));
  }, []);

  // const MyContext = React.createContext("Hello World");

  return (
    // <MyContext value={"132"}>
    <div className="App">
      <h1>Pet Shop</h1>
      <ProductCard data={state} cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
    // </MyContext>
  );
}

export default App;
