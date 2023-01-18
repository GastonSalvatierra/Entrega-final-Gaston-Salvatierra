import Item from "../Item/Item"


const ItemList = ({productos}) => {
  return (
    
    <ul>
    {productos.map((items) => (
        <Item producto = {items}/>
     ))}
    </ul>
  )
}

export default ItemList;
