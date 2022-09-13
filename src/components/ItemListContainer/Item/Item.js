import './Item.css'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({name,price,img}) => {
  return (
    <div>  
        <div className='card' >
            <img src={img} alt="imagen" />
            <h2>{name}</h2>
            <h5>{price} </h5>
            <ItemCount/>
        </div>
    </div>
  )
}

export default Item;