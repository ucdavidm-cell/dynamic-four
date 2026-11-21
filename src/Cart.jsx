import React, { useState } from "react";
import "./Cart.css";
function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Blue Hoodie", size: "Medium", color: "Teal", price: 49.99, qty: 1 },
    { id: 2, name: "Pink Hoodie", size: "Small", color: "Pink", price: 49.99, qty: 1 }
  ]);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.04801;
  const total = subtotal + tax;
  function changeQty(id, amount) {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + amount) }
        : item
    ));
  }
  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }
  return (
    <div className="cart">
      <h1>YOUR SHOPPING CART</h1>
      <section className="cart-items">
        {items.map(item => (
          <div className="cart-product" key={item.id}>
            <div className="hoodie">
              {item.color === "Pink" ? "🩷" : "🩵"}
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
              <b>${item.price.toFixed(2)}</b>
              <div className="quantity">
                <button onClick={() => changeQty(item.id, -1)}>−</button>
                {item.qty}
                <button onClick={() => changeQty(item.id, 1)}>+</button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </section>
      <section className="order">
        <h2>ORDER SUMMARY</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: Free</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button
          onClick={() => alert("Proceeding to checkout!")}
          disabled={!items.length}
        >
          CHECKOUT
        </button>
      </section>
    </div>
  );
}
export default Cart;