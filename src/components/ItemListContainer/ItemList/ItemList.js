import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({list}) => {
  return (
    <div className="tarjeta">
        {list.map((product) => (<Item key={product.id} nombre={product.nombre} precio= {product.precio} img= {product.img}/>))}   
    </div>
  );
};

export default ItemList;