import './Item.css'

const Item = ({producto}) => {
  return (
    <li className="productos-li">
    <h1>{producto.titulo}</h1>
    <img alt={producto.titulo} src={producto.img}/>
    <h4>{producto.descripcion}</h4>
    <h4>${producto.precio}</h4>
    </li>   
  )
}

export default Item