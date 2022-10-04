import { CartContext } from "./CartContext";
import { useState } from "react";



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item , cantidad) => {
      const itemAdded = isInCart(item.id)
      if (itemAdded) {
        itemAdded.cantidad = itemAdded.cantidad += cantidad;            
      }else {
          setCart([...cart, {...item, cantidad}]);
      }
     
  };

  const isInCart = (id) => {
      return cart.find((element) =>element.id === id);
      
  };
  const removeItem = (productId) => {
    let nuevoArreglo = [];
    cart.forEach((product) => {
        if(product.id === productId){
            console.log(product);
        }else {
            nuevoArreglo.push(product);
        }
    });
    setCart(nuevoArreglo);
};
  const clear = () =>{
    
    setCart([]);
  }

  return (
    <CartContext.Provider value= {{cart, addToCart, removeItem, clear}}>
        {children}
    </CartContext.Provider>
  
  );
};
