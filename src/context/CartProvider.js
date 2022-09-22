import { CartContext } from "./CartContext";
import { useState } from "react";



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) =>{
     
        setCart ([...cart, {item, cantidad}]);
        console.log('cart', [...cart, {item, cantidad}])
        
        if (isInCart(item.id)){
            alert("Ya esta en el carrito");
        }else{
            setCart([...cart, {item, cantidad}])
        }
    }
    const isInCart = (id) =>{
        return cart.some ((item) => item.id === id);
}
  return (
    <CartContext.Provider value= {{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  
  );
};
