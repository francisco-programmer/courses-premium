import { createContext, useState } from 'react';

//* creamos el contexto
const ShoppingCartContext = createContext();



//*proveedor del contexto
export function ShoppingCartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);
  

  // *Función para agregar un producto al carrito
  const addToCart = product => {
    setCartItems([...cartItems, product]);
  }


   //* Función para eliminar un producto del carrito
  const removeFromCart = productId => {
    setCartItems(cartItems.filter(p => p.id !== productId));
  }

  //* funcion para vaciar el carrito
  const clearCart = () => {
    setCartItems([])
  }
 

  //* desestructuramos las funciones para enviarlas por props 
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
  
  return (
    //* Renderiza el context en los todos los componentes
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartContext;