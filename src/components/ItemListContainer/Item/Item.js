import './Item.css'



const Item = ({name,price,img}) => {
  return (
    <div>  
        <div className='card' >
            <img src={img} alt="imagen" />
            <h2>{name}</h2>
            <h5>{price} </h5>
            
        </div>
    </div>
  )
}

export default Item;