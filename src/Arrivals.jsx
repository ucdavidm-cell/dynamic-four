
import React, { useState } from "react";
import "./Arrivals.css";

const products = [
  { id: 1, color: "#8063b5", name: "Purple Hoodie", price: 49.99 },
  { id: 2, color: "#a5a5a5", name: "Grey Hoodie", price: 49.99 },
  { id: 3, color: "#568fc4", name: "Blue Hoodie", price: 49.99 },
  { id: 4, color: "#286b61", name: "Green Hoodie", price: 49.99 },
  { id: 5, color: "#351c2b", name: "Burgundy Hoodie", price: 49.99 },
  { id: 6, color: "#ed83bd", name: "Pink Hoodie", price: 49.99 },
  { id: 7, color: "#b9ad91", name: "Beige Hoodie", price: 49.99 },
  { id: 8, color: "#171923", name: "Black Hoodie", price: 49.99 },
];

function Hoodie({ color }) {
  return (
    <svg viewBox="0 0 180 190" className="hoodie-art">
      <path
        d="M58 42 L38 53 L12 94 L35 109 L48 91 L45 172 L135 172 L132 91 L145 109 L168 94 L142 53 L122 42 L110 29 L70 29 Z"
        fill={color}
        stroke="#00000025"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M70 29 Q90 70 110 29 L103 13 Q90 2 77 13 Z"
        fill={color}
        stroke="#00000025"
        strokeWidth="2"
      />
      <path
        d="M79 46 L85 87 M101 46 L95 87"
        stroke="#ffffff90"
        strokeWidth="2"
      />
      <path
        d="M75 135 Q90 126 105 135 L108 153 L72 153 Z"
        fill="#00000015"
      />
    </svg>
  );
}

export default function Arrivals() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  function addToCart(product, amount = 1) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + amount }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: amount }];
    });

    setSelectedProduct(null);
    setQuantity(1);
  }

  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="arrivals">

      <header className="arrivals-heading">
        <div>
          <p className="arrivals-subtitle">
            THE LATEST COLLECTION
          </p>
          <h1>New Arrivals</h1>
        </div>

        <button
          className="cart-count"
          onClick={() => setShowCart(!showCart)}
        >
          Bag ({cartCount})
        </button>
      </header>

      {/* PRODUCT GRID */}

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <button
              className="product-image"
              onClick={() => {
                setSelectedProduct(product);
                setQuantity(1);
              }}
              aria-label={`View ${product.name}`}
            >
              <Hoodie color={product.color} />
            </button>

            <button
              className="product-name"
              onClick={() => setSelectedProduct(product)}
            >
              {product.name}
            </button>

            <p className="product-price">
              ${product.price.toFixed(2)}
            </p>

            <button
              className="add-button"
              onClick={() => addToCart(product)}
            >
              Add to Bag
            </button>

          </div>
        ))}
      </div>

      {/* PRODUCT DETAILS */}

      {selectedProduct && (
        <div
          className="shop-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-details"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="details-image">
              <Hoodie color={selectedProduct.color} />
            </div>

            <div className="details-info">
              <p className="arrivals-subtitle">
                NEW COLLECTION
              </p>

              <h2>{selectedProduct.name}</h2>

              <h3>
                ${selectedProduct.price.toFixed(2)}
              </h3>

              <p className="details-description">
                Comfortable, stylish and made for everyday wear.
                Find your new favorite hoodie.
              </p>

              <label>Quantity</label>

              <div className="quantity-control">
                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="details-add-button"
                onClick={() =>
                  addToCart(selectedProduct, quantity)
                }
              >
                Add to Bag — $
                {(selectedProduct.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING BAG */}

      {showCart && (
        <div
          className="shop-overlay"
          onClick={() => setShowCart(false)}
        >
          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setShowCart(false)}
            >
              ×
            </button>

            <h2>Your Shopping Bag</h2>

            {cart.length === 0 ? (
              <p>Your bag is currently empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div
                      className="cart-color"
                      style={{ background: item.color }}
                    />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>

                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            changeQuantity(item.id, -1)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            changeQuantity(item.id, 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="cart-total">
                  Total: ${cartTotal.toFixed(2)}
                </div>

                <button
                  className="details-add-button"
                  onClick={() =>
                    alert("Checkout is not connected yet!")
                  }
                >
                  Continue to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
