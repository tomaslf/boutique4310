import './ItemListContainer.css';
import Productos from './Productos/Productos';
import { useState} from 'react';
import ItemList from './ItemList/ItemList';

const ItemListContainer = ({greeting} ) => {
    const [initialState, setInitialState] = useState(0);
    const SumaUno = () => {
        if(initialState <= 4) {
            setInitialState (initialState + 1);
            let stock = document.getElementById("stock");
            stock = ``;
             document.getElementById("stock").innerHTML = stock;
        }else{
          alert("Solo contamos con 5 unidades de este producto");
          let stock = document.getElementById("stock");
          stock = `Solo contamos con 5 unidades de este producto`;
          document.getElementById("stock").innerHTML = stock;
      }
        
    }
    const RestaUno = () => {
        if(initialState > 0) {
            setInitialState (initialState - 1);
        }else{
            alert("Opción incorrecta");
            let stock = document.getElementById("stock");
            stock = ``;
             document.getElementById("stock").innerHTML = stock;
        }        
    };

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
          
          <h1 className="titulo">{greeting}</h1>
          <ItemList lista= {ListaProductos}/> 
          <div className='cards'>
            <div className="card"> 
                                        
                <div className="contador">
                    <button onClick={RestaUno}>-</button>
                    <p>{initialState} </p>
                    <button onClick={SumaUno}>+</button>      
                </div>
                <p id='stock'></p>
            </div>
        </div>        
    </div>
      
    )
  }

export default ItemListContainer;