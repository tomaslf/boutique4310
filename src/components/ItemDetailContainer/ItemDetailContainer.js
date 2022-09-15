import './ItemDetailContainer.css';
import Products from '../ItemListContainer/Products/Products';
import ItemDetail from './ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';



const ItemDetailContainer = () => {
    

    const [productItem, setProductItem] = useState([]);
    
    const {id} = useParams() ;

    const getItem =  new Promise ((resolve,reject) =>{
      setTimeout(() => {
        resolve(Products);
        reject("ERROR");
      })
     })
    
    useEffect(() =>{
        getItem.then((response)=>{
          const filtrarItem = response.filter ((prod) => prod.id === id );
          setProductItem(...filtrarItem);
        })
    });

  

    return (
      <div className='itemCard'>
       <ItemDetail item= {productItem}/>     
    </div>
      
    )
  }

export default ItemDetailContainer;