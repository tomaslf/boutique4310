import './ItemCount.css'
import Button from 'react-bootstrap/Button';


const ItemCount = ({initialState, setInitialState}) => {
    
    const SumaUno = () => {
        if(initialState <= 4) {
            setInitialState (initialState + 1);        
        }else{
          alert("Solo contamos con 5 unidades de este producto");   
      }
        
    }
    const RestaUno = () => {
        if(initialState > 0) {
            setInitialState (initialState - 1);
        }else{
            alert("Opción incorrecta");   
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




    
   