import './Item.css'
import Boton from '../Boton/Boton'


const Item = ({name,price,img}) => {
  return (
    <div>  
        <div className='card' >
            <img src={img} alt="imagen" />
            <h2>{name}</h2>
            <h5>{price} </h5>
            <Boton/>
        </div>
    </div>
  )
}

export default Item