import './Item.css'


const Item = ({nombre,precio,imagen}) => {
  return (
    <div>
        
        <div className="cards">
            <img src={imagen} alt="imagen" />
            <h2>{nombre}</h2>
            <h5>{precio} </h5>
        </div>
        
        

        


    </div>
  )
}

export default Item