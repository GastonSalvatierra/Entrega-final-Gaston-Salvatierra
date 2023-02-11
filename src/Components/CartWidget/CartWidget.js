import carrito from '../../assets/carrito-de-compras.png';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
  const {cart} = useContext(CartContext);
  const [total,setTotal] = useState(0);


  useEffect(() => {
    setTotal(
      cart?.reduce((prev,curr)=>{
        return prev + curr.quantity;
      },0)
    )

  }, [cart]);


  return (
        <div className="compra">
            <a className='contenedor-img'><img className="carrito" src={carrito}/><span className="contador">{total}</span></a>
        </div>
  )
}

export default CartWidget;