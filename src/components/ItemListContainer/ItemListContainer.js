import './ItemListContainer.css';
import Productos from './Productos/Productos';
import ItemList from './ItemList/ItemList';
import { useState } from 'react';

const ItemListContainer = ({greeting} ) => {
    

    const [ListaProductos, setListaProductos] = useState([]);
  

    new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(Productos)
    }, 2000)
   }).then((response) => {
      setListaProductos(response);
   })


    return (
      <div>
          
          <h1 className="titulo" >{greeting}</h1>
          <ItemList lista= {ListaProductos}/>       
    </div>
      
    )
  }

export default ItemListContainer;