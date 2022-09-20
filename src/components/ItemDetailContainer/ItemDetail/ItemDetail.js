import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({item}) => {

  
  const [initialState, setInitialState] = useState(0);
  return (   
    <div>  
        <div className='card' >
            <h3>DETALLE DEL PRODUCTO</h3>
            <img src={item.img} alt="imagen" />
            <h2>{item.name}</h2>
            <h5>{item.price} </h5>
            <ItemCount  setInitialState = {setInitialState} initialState = {initialState} />
            <Link to={'/cart'}><Button variant='secondary' >Agregar al Carrito</Button></Link>

        </div>
    </div>
  )
}

export default ItemDetail;