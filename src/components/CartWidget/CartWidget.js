import './CartWidget.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartWidget = () => {

  const {cart} = useContext(CartContext);
  
  
  return (
    <div>
            {cart.length === 0 ? ('') : (
          <>
          <Button variant="primary">
          <img src="../images/cart.svg" alt="carrito" className="carrito"/> <Badge bg="secondary">{cart.length} </Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
          </>
        )}
  </div>
   
  )
}

export default CartWidget;