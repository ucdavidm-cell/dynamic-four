
import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onBack: () => void;
  onOrderComplete?: () => void;
}

function Cart({
  cartItems,
  onUpdateQuantity,
  onRemove,
  onBack,
  onOrderComplete,
}: CartProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setOrderPlaced(true);
    onOrderComplete?.();
  };

  if (orderPlaced) {
    return (
      <div className="cart-page order-success">
        <h1>THANK YOU!</h1>
        <p>Your True Form order has been received.</p>
        <p>Thank you for shopping with us!</p>

        <button className="checkout-button" onClick={onBack}>
          BACK TO SHOP
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>YOUR SHOPPING CART</h1>

      <button className="cart-back-button" onClick={onBack}>
        ← CONTINUE SHOPPING
      </button>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart Is Empty</h2>
          <p>You haven't added anything yet.</p>

          <button className="checkout-button" onClick={onBack}>
            SHOP TRUE FORM
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-quantity">
                <button
                  onClick={() =>
                    onUpdateQuantity(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    onUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>

          {!showCheckout ? (
            <button
              className="checkout-button"
              onClick={() => setShowCheckout(true)}
            >
              PROCEED TO CHECKOUT
            </button>
          ) : (
            <div className="checkout-form">
              <h2>CHECKOUT</h2>
              <p>Enter your shipping information.</p>

              <form onSubmit={handleCheckout}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="text"
                  placeholder="Street Address"
                  required
                />

                <input
                  type="text"
                  placeholder="City"
                  required
                />

                <input
                  type="text"
                  placeholder="State"
                  required
                />

                <input
                  type="text"
                  placeholder="ZIP Code"
                  required
                />

                <h3>Order Total: ${total.toFixed(2)}</h3>

                <button
                  type="submit"
                  className="checkout-button"
                >
                  PLACE ORDER
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;s