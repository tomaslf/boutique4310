import './Item.css'
import Boton from '../Boton/Boton'

const Item = ({nombre,precio,imagen}) => {
  return (
    <div>  
        <div className='card' >
            <img src={imagen} alt="imagen" />
            <h2>{nombre}</h2>
            <h5>{precio} </h5>
            <Boton/>
        </div>
    </div>
  )
}

export default Item