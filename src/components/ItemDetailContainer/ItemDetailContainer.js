import './ItemDetailContainer.css';
import Products from '../ItemListContainer/Products/Products';
import ItemDetail from './ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const db = getFirestore();
    const [productItem, setProductItem] = useState([]);
    
    const {id} = useParams() ;

    const getItem =  () =>{
      
      const queryDoc = doc(db, 'item', id);
      getDoc(queryDoc)
      .then((res)=> {
        setProductItem(res.data())
      });
    }
     
    
    useEffect(() =>{
        getItem()
        },[id]);

  

    return (
      <div className='itemCard'>
       <ItemDetail item= {productItem}/>     
    </div>
      
    )
  }

export default ItemDetailContainer;