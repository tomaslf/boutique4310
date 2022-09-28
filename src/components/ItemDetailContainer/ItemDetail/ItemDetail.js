import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, Spinner} from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import Carousel from 'react-bootstrap/Carousel';

const rutaInicial = '../images/'
const ItemDetail = ({item}) => {

  const {cart, addToCart} = useContext(CartContext);
  const [initialState, setInitialState] = useState(1);
  const onAdd = (item) =>{
    addToCart(item, initialState)  
 };
  const [loader, setLoader] = useState(true); 
      useEffect (() => {
        setTimeout(() => {
          setLoader(false);
        }, 1000)
      });

  return (   
    <div>  
      {loader ? <>
        <Spinner variant='danger mt-5' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
      </Spinner>
      </>
      :
      <>
          <div className='card-detail' >
          <div className='card-carousel'>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rutaInicial +item.img}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rutaInicial + item.img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img id='img3'
                    className="d-block w-100"
                    src={rutaInicial + item.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
          </div>
            <div className='detail'>
                 
                  <h2>{item.name}</h2>
                  <h5>$ {item.price} </h5>
                  <h4>{item.description} </h4>
                  <ItemCount  setInitialState = {setInitialState} initialState = {initialState} />
                  <Button className='mt-3'  variant='secondary' onClick={()=> onAdd(item)} >Agregar al Carrito</Button>
                  {cart.length === 0 ? ('') : (
                <>
                <Link to={'/cart/'} ><Button variant='success' >Ir a pagar</Button></Link>
                </>
                )} 
            </div>   
        </div>
      </>}
        
    </div>
  )
}

export default ItemDetail;