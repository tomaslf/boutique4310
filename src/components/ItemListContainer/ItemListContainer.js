import './ItemListContainer.css'
import { useState } from 'react';


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
    }
    return (
      <div>
        <h1 className="titulo">{greeting}</h1>
          <div className='cards'>
            <div className="card">
                <h4>Nombre del Producto</h4>               
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