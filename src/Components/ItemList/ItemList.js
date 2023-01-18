import Item from "../Item/Item"
import { Link } from "react-router-dom";
import './ItemList.css'


const ItemList = ({productos}) => {
  return (
    <ul className="productos-ul">
        {productos.map((item)=> (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Item producto={item}/>
          </Link>
        ))}
    </ul>

    

  
  )
}

export default ItemList;
