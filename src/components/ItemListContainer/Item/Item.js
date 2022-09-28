import './Item.css'
import { Link } from 'react-router-dom';

const rutaInicial = '../images/'
const Item = ({id,name,price,img}) => {

  return (
    <div>  
       <Link  to={'/detail/' + id }
        style={{textDecoration : 'none', color: 'black' }} >
        <div className='card' >
        
            <img src={rutaInicial + img} alt="imagen" />
            <h3>{name}</h3>
            <h5> $ {price} </h5>
        
            
        </div>
        </Link>
    </div>
  )
}

export default Item;