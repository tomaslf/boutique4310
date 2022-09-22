import { CartContext } from "./CartContext";
import { useState } from "react";



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) =>{
     
        setCart ([...cart, {item, cantidad}]);
        console.log('cart', [...cart, {item, cantidad}])
        
}
  return (
    <CartContext.Provider value= {{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  
  );
};
