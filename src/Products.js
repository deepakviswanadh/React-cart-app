import React from "react";
import { useState } from "react";

export default function Products({ addToCart }) {
  let [products] = useState([
    {
      name: "Sanitizer",
      price: "$7.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51qFv%2BsjCeL._SL1000_.jpg",
    },
    {
      name: "Masks[pack of 6]",
      price: "$23.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWmEWCC3qre-g6tDetLtLek2gudVTkMUYlJA&usqp=CAU",
    },
  ]); //products
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((i, index) => (
          <div className="product" key={index}>
            <h2>{i.name}</h2>
            <h3>{i.price}</h3>
            <img src={i.image} alt={i.name}></img>
            <p>
              <button onClick={() => addToCart(i)}>Add to cart</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
