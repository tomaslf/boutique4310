import './ItemCount.css'
import Button from 'react-bootstrap/Button';


const ItemCount = ({initialState, setInitialState}) => {
    
    const SumaUno = () => {
        if(initialState <= 4) {
            setInitialState (initialState + 1);        
        }else{
           
      }
        
    }
    const RestaUno = () => {
        if(initialState > 0) {
            setInitialState (initialState - 1);
        }else{
              
        }        
    };
    return (
      <div>
          <div className="contador">
              <Button className='mt-3' variant='secondary' onClick={RestaUno}>-</Button>
                <p><strong>{initialState}</strong> </p>
              <Button className='mt-3' variant='secondary'  onClick={SumaUno}>+</Button>   
              
          </div>
              
  </div>
    )
  }
  
  export default ItemCount;




    
   