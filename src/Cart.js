import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((i, index) => (
          <div className="product" key={index}>
            <h2>{i.name}</h2>
            <h3>{i.price}</h3>
            <img src={i.image} alt={i.name}></img>
            <p>
              <button onClick={() => removeFromCart(i)}>Remove</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
