import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../../context/CartContext';
import Carousel from 'react-bootstrap/Carousel';


const ItemDetail = ({item}) => {

  const {cart, addToCart} = useContext(CartContext);
  const [initialState, setInitialState] = useState(1);
  const onAdd = (item) =>{
    addToCart(item, initialState)  
 };
 

  return (   
    <div>  
        
        <div className='card-detail' >
          <div className='card-carousel'>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img id='img3'
                    className="d-block w-100"
                    src={item.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
          </div>
            <div className='detail'>
                  <h2>Detalle del Producto</h2>
                  <h2>{item.name}</h2>
                  <h5>${item.price} </h5>
                  <ItemCount  setInitialState = {setInitialState} initialState = {initialState} />
                  <Button variant='secondary' onClick={()=> onAdd(item)} >Agregar al Carrito</Button>
                  {cart.length === 0 ? ('') : (
                <>
                <Link to={'/cart/'} ><Button variant='success' >Ir a pagar</Button></Link>
                </>
                )} 
            </div>   
        </div>
    </div>
  )
}

export default ItemDetail;