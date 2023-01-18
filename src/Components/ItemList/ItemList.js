import Item from "../Item/Item"


const ItemList = ({productos}) => {
  return (
    
    <ul>
        <Item producto = {productos}/>
    </ul>
  )
}

export default ItemList;
