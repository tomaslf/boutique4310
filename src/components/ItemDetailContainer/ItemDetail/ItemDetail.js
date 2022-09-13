import './ItemDetail.css'


const ItemDetail = ({item}) => {
  return (
    <div>  
        <div className='card' >
            <img src={item.img} alt="imagen" />
            <h2>{item.name}</h2>
            <h5>{item.price} </h5>
        </div>
    </div>
  )
}

export default ItemDetail;