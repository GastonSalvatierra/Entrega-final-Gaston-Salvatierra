import carrito from '../../assets/carrito-de-compras.png';

const CartWidget = () => {
  return (
        <div className="compra">
            <a><img className="carrito" src={carrito}/><span className="contador">0</span></a>
        </div>
  )
}

export default CartWidget;