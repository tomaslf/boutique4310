import Item from "../Item/Item"

const ItemList = ({lista}) => {
  return (
    <div>
        {lista.map((producto) => (<Item nombre={producto.nombre} precio= {producto.precio} imagen= {producto.imagen}/>))}   
    </div>
  );
};

export default ItemList;