import './ItemDetailContainer.css';
import Products from '../ItemListContainer/Products/Products';
import ItemDetail from './ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';



const ItemDetailContainer = () => {
    

    const [ProductItem, setProductItem] = useState([]);
    useEffect(() =>{
        getItem.then((response)=>{
          const filtrarItem = response.filter ((prod) => prod.id === '2');
          setProductItem(...filtrarItem);
        })
    });

  const getItem =  new Promise ((resolve,reject) =>{
    setTimeout(() => {
      resolve(Products);
      reject("ERROR");
    }, 2000)
   })

    return (
      <div className='itemCard'>
          <ItemDetail item= {ProductItem}/>       
    </div>
      
    )
  }

export default ItemDetailContainer;