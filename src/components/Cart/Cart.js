import './Cart.css'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Button ,Alert } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {getFirestore, collection, addDoc } from 'firebase/firestore';
import moment from 'moment';
import swal from 'sweetalert'

const rutaInicial = '../images/'
const Cart = () => {

    const {cart , removeItem, clear} = useContext(CartContext);
    const total = cart.reduce((previousValue, currentValue)=> previousValue + currentValue.price * currentValue.cantidad,0 )
    const createOrder = () =>{
        const db = getFirestore();
        clear();
        
        const orden = {
            user: {
                name: "Tomas",
                email: "tomas@hotmail.com",
                phone: "1158550197"
            },
            detalle:cart.map((item) => ({
              name: item.name,
              price: item.price,
              cantidad: item.cantidad,
            })),
            date: moment().calendar(),
            total: total,
        };
    const query = collection(db, "orders");
    addDoc(query, orden)
    .then(({id}) => console.log(id), swal(
      'Gracias por tu compra!',
      'Te enviaremos un mail con la factura',
      'success'
    ))
    .catch(() => alert("Hubo un error al procesar tu compra"))
    };

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
                              <Button className='mb-3' variant='outline-danger' onClick={()=> removeItem(item.id)} >Eliminar Articulo</Button>
                              <Link to={'/'}><Button variant='outline-primary' >Seguir Comprando</Button></Link>
                            </div>  
                </div>     
            ))}
                <div className='totalCompra'> Total ${total} </div>
                <div className='botonesFinales'>
                    <Button className='vaciar' variant='danger' onClick={()=> clear()} >Vaciar Carrito</Button>
                    <NavLink to={'/'}><Button className='finalizar' variant='success' onClick={createOrder}  >Finalizar Compra</Button></NavLink>
                </div>    
            </>
            )};     
    </div>);
};

export default Cart