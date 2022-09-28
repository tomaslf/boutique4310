import './Cart.css'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Button ,Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const rutaInicial = '../images/'
const Cart = () => {

    const {cart , removeItem, clear} = useContext(CartContext);

  return (
    <div>
            <h1 className='cart-title'>PRODUCTOS ELEGIDOS</h1>
               {cart.length === 0 ? (
            <>
            <Alert className='text-center' variant='danger'>
               NO TENES PRODUCTOS AGREGADOS
          </Alert>
              <Link to={'/'}><h3>Ver Productos</h3></Link>
            </>
           ) : 
          (
            <>
            
                {cart.map((item) =>(    
                    <div key={item.id} className="cart-view">
                        <img className='cart-img' src={rutaInicial + item.img} alt='Camisetas Mundiales' />
                        <h3>{item.name} </h3>
                        <strong><p>${item.price} </p></strong>
                        <strong><p>{item.cantidad} </p></strong>
                        <h4>Precio total : $ {item.price * item.cantidad} </h4>
                            <div className='botones'>
                              <Button className='mb-3' variant='danger' onClick={()=> removeItem(item.id)} >Eliminar Articulo</Button>
                              <Link to={'/'}><Button variant='primary' >Seguir Comprando</Button></Link>
                            </div>  
                    </div>     
            ))}
                  <Button className='vaciar' variant='danger' onClick={()=> clear()} >Vaciar Carrito</Button>
                  
            </>
            )};     
    </div>);
};

export default Cart