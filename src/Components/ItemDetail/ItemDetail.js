import Counter from '../Counter/Counter'
import { useState, useContext } from 'react';
import {CartContext} from '../../Context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({productos}) => {
  const {addItem} = useContext(CartContext)
  const [contador,setContador] = useState(1);
  const stock= {productos};

  return (

    <div>
        <li>
            <h2>{productos.titulo}</h2>
            <img alt={productos.titulo} src={productos.img} width='300px' />
            <h3>{productos.descripcion}</h3>
            <h3>${productos.precio}</h3>
            <Counter contador={contador} setContador={setContador} stock= {productos.stock}/>
            <button onClick= {() => addItem(productos,contador)}>agregar al carrito</button>
        </li>
        
    

    </div>
  )
}

export default ItemDetail