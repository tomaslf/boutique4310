import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


const ItemListContainer = ({greeting} ) => {
    
    const {category} = useParams();
    const [ProductList, setProductList] = useState([]);

    useEffect(() =>{
        getProducts();
        }
        ,[category]);

  const getProducts =() =>{
    const db = getFirestore();
    const querySnapshot = collection(db,'item');
   
    if(category){
      const queryFilter = query(querySnapshot,where('category', '==' , category));
      getDocs(queryFilter)
      
      .then((response) => {
          const data = response.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()} ;
      })
      setProductList(data);
    })}
    
    else{
      getDocs(querySnapshot)
      .then((response) => {
          const data = response.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()} ;
      })
      setProductList(data);
    });}
  
   };

   const [loader, setLoader] = useState(true); 
      useEffect (() => {
        setTimeout(() => {
          setLoader(false);
        }, 2500)
      })


    return (
      <div>
          
          <h1 className="titulo" >{greeting}</h1>
       {loader ?<img className='ball-img' alt='Old Football' src='../images/ball.png'/> : <ItemList list= {ProductList}/> }     
    </div>
      
    )
  }

export default ItemListContainer;