import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ItemCount = () => {
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
    return (
      <div>
          <div className="contador">
              <Button variant='secondary' onClick={RestaUno}>-</Button>
              <p><strong>{initialState}</strong> </p>
              <Button variant='secondary'  onClick={SumaUno}>+</Button>   
              
          </div>
              
  </div>
    )
  }
  
  export default ItemCount;




    
   