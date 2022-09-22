import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../../context/CartContext';


const ItemDetail = ({item}) => {

  const {addToCart} = useContext(CartContext);
  const [initialState, setInitialState] = useState(1);
  

  const onAdd = (item) =>{
    addToCart(item, initialState)
    
 }

  return (   
    <div>  
        <div className='card' >
            <h3>DETALLE DEL PRODUCTO</h3>
            <img src={item.img} alt="imagen" />
            <h2>{item.name}</h2>
            <h5>{item.price} </h5>
            <ItemCount  setInitialState = {setInitialState} initialState = {initialState} />
            <Button variant='secondary' onClick={()=> onAdd(item)} >Agregar al Carrito</Button>
            <Link to={'/cart/'}  ><Button variant='success' >Finalizar Compra</Button></Link>
        </div>
    </div>
  )
}

export default ItemDetail;