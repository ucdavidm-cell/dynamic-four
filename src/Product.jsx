
import React, { useState } from "react";
import "./Product.css";

export default function Product({ addToCart }) {
  const [sizes, setSizes] = useState({});

  const products = [
    {
      name: "true form base hoodie",
      color: "burgundy",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
    },
    {
      name: "true form base hoodie",
      color: "Grey",
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500"
    },
    {
      name: "True form baggy jean",
      color: "washed blue",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    },
    {
      name: "True form baggy jean",
      color: "faded black",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    }
  ];

  return (
    <main className="productsPage">
      <h1>PRODUCT PAGE</h1>

      <div className="products">
        {products.map((p, i) => (
          <div className="product" key={i}>
            <h2>{p.name}</h2>
            <img src={p.image} alt={p.name} />

            <p>color-{p.color}</p>

            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map(size => (
                <button
                  key={size}
                  className={sizes[i] === size ? "selected" : ""}
                  onClick={() => setSizes({...sizes, [i]: size})}
                >
                  {size}
                </button>
              ))}
            </div>

            <button className="add"
              onClick={() => sizes[i]
                ? addToCart()
                : alert("Please select a size!")}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
