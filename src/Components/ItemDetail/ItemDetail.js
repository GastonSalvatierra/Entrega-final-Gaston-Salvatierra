import Counter from '../Counter/Counter'
import { useState } from 'react';

const ItemDetail = ({productos}) => {
  
  const [contador,setContador] = useState(1);
  const stock= 5;

  return (

    <div>
        <li>
            <img alt={productos.title} src={productos.image} width='300px' />
            <h2>{productos.title}</h2>
            <h3>{productos.category}</h3>
            <h3>{productos.description}</h3>
        </li>
        <Counter contador={contador} setContador={setContador} stock= {stock}/>

    </div>
  )
}

export default ItemDetail