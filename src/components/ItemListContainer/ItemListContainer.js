import './ItemListContainer.css';
import Products from './Products/Products';
import ItemList from './ItemList/ItemList';
import { useState } from 'react';

const ItemListContainer = ({greeting} ) => {
    

    const [ProductList, setProductList] = useState([]);
  

    new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(Products)
    }, 2000)
   }).then((response) => {
      setProductList(response);
   })


    return (
      <div>
          
          <h1 className="titulo" >{greeting}</h1>
          <ItemList list= {ProductList}/>       
    </div>
      
    )
  }

export default ItemListContainer;