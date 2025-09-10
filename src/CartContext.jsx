import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) =>
          item.id === product.id && item.selectedOption === product.selectedOption
      );
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id && item.selectedOption === product.selectedOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) =>
          item.id === product.id && item.selectedOption === product.selectedOption
      );
      if (existing.quantity === 1) {
        return prevItems.filter(
          (item) =>
            !(item.id === product.id && item.selectedOption === product.selectedOption)
        );
      } else {
        return prevItems.map((item) =>
          item.id === product.id && item.selectedOption === product.selectedOption
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}