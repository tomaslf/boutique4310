import './Item.css'
import { Link } from 'react-router-dom';


<<<<<<< HEAD
const Item = ({id,name,price,img}) => {
=======


const Item = ({name,price,img}) => {
>>>>>>> changeStyle
  return (
    <div>  
       <Link  to={'/detail/' + id }
        style={{textDecoration : 'none', color: 'black' }} >
        <div className='card' >
        
            <img src={img} alt="imagen" />
            <h2>{name}</h2>
            <h5> $ {price} </h5>
        
            
        </div>
        </Link>
    </div>
  )
}

export default Item;