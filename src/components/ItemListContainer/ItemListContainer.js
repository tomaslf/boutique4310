import './ItemListContainer.css';
import Products from './Products/Products';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';



const ItemListContainer = ({greeting} ) => {
    
    const {category} = useParams();

    const [ProductList, setProductList] = useState([]);
    


    useEffect(() =>{
      if(category){
        const response = Products.filter((response) => response.category === category)
        setProductList(response);
    }else{
        getProducts.then((response) => {
            setProductList(response);
        })
        
    }        
},[category]);

  const getProducts =  new Promise ((resolve,reject) =>{
    setTimeout(() => {
      resolve(Products);
      reject("ERROR");
    }, 2000)
   })

   const [loader, setLoader] = useState(true); 
   useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
   })


    return (
      <div>
          
          <h1 className="titulo" >{greeting}</h1>
       {loader ?<img className='ball-img' alt='Old Football' src='../images/ball.png'/> : <ItemList list= {ProductList}/> }     
    </div>
      
    )
  }

export default ItemListContainer;