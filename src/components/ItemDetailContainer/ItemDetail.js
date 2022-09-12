import Products from '../ItemListContainer/Products/Products';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import { useState } from 'react';

const ItemDetail = () => {
    

    const [ProductList, setProductList] = useState([]);
  

    new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(Products.filter ((prod) => prod.id === '1'))
    }, 2000)
   }).then((response) => {
      setProductList(response);
   })


    return (
      <div>
        
          <ItemList list= {ProductList}/>       
    </div>
      
    )
  }

export default ItemDetail;