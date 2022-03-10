import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cart = JSON.parse(localStorage.getItem("Cart") || "[]");

  const [newCart, setNewCart] = useState(cart);

  const addToCart = (item) => {
    setNewCart([...newCart, item]);
    localStorage.setItem("Cart", JSON.stringify([...newCart, item]));
  };

  const removeFromCart = (toRemove) => {
    const filtered = newCart.filter((item) => item.name !== toRemove.name);
    setNewCart(filtered);
    localStorage.setItem("Cart", JSON.stringify(filtered));
  };

  return (
    <CartContext.Provider value={{ newCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
