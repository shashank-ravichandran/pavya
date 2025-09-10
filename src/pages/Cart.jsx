import { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p><strong>Variant:</strong> {item.selectedOption}</p>
                <p>₹{item.price} × {item.quantity}</p>
                <p><strong>Subtotal:</strong> ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </section>
  );
}