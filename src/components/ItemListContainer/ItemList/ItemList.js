import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({list}) => {
  return (
    
    
    <div className="tarjeta">
        {list.map((product) => (
        <Link key={product.id} to={'/products/' + product.id }
        style={{textDecoration : 'none', color: 'black' }} > 
        <Item  name={product.name} price= {product.price} img= {product.img}/>
        </Link>))}   
    </div>
    
  );
};

export default ItemList;