import './ItemListContainer.css';
import Products from './Products/Products';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ({greeting} ) => {
    

    const [ProductList, setProductList] = useState([]);
    useEffect(() =>{
        getProducts.then((response)=>{
          setProductList(response)
        })
    })

  const getProducts =  new Promise ((resolve,reject) =>{
    setTimeout(() => {
      resolve(Products);
      reject("ERROR");
    }, 2000)
   })


    return (
      <div>
          
          <h1 className="titulo" >{greeting}</h1>
          <ItemList list= {ProductList}/>       
    </div>
      
    )
  }

export default ItemListContainer;