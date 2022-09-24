import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const {cart , addToCart} = useContext(CartContext);
    console.log ( cart)


  return (
    <div>
        
          <h1>PRODUCTOS ELEGIDOS</h1>
          {cart.map((item) =>(    
                  <div  key={item.item.id}>
                      <h2>{item.item.name} </h2>
                      <p>{item.item.price} </p>
                      <p>{item.cantidad} </p>
                      <img src={item.item.img} />
                  </div>
              
          ))}
    </div>);
};

export default Cart