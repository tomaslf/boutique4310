
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({list}) => {
  return (
    
    
    <div className="tarjeta">
        {list.map((product) => (
        <Item key={product.id} id={product.id}  name={product.name} price= {product.price} img= {product.img} category = {product.category} />
      ))}   
    </div>
    
  );
};

export default ItemList;