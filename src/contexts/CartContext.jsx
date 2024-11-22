import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

// Crea el contexto
const CartContext = createContext();

// Proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    let notificationShown = false;
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        const updatedItems = prevItems.map((item) => {
          if (item.id === product.id) {
            const newQuantity = item.quantity + 1;
            if (!notificationShown) {
              toast.success("Cantidad actualizada en el carrito.");
              notificationShown = true; // Asegurar que la notificación se muestra una vez
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        return updatedItems;
      } else {
        toast.success("Producto agregado al carrito.");
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      toast.info("Producto eliminado del carrito.");
      return updatedItems;
    });
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
    toast.info("Carrito vaciado.");
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, quantity, stock) => {
    if (quantity > stock) {
      toast.error("No puedes superar el stock disponible.");
      return;
    }
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
