import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({lista}) => {
  return (
    <div className="tarjeta">
        {lista.map((producto) => (<Item nombre={producto.nombre} precio= {producto.precio} imagen= {producto.imagen}/>))}   
    </div>
  );
};

export default ItemList;