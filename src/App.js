import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import Cart from "./Cart";

let PAGE_PRODUCTS = "products";
let PAGE_CART = "cart";

function App() {
  let [cart, setCart] = useState([]); //add products to cart
  let [page, setPage] = useState(PAGE_PRODUCTS); //toggle pages between cart and products

  //add to cart
  let addToCart = (i) => {
    setCart([...cart, { ...i }]);
  };

  //remove from cart
  let removeFromCart = (removeproduct) => {
    setCart(cart.filter((product) => product !== removeproduct));
  };

  //navigate between cart and products
  let navigateTo = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          Go to products
        </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
