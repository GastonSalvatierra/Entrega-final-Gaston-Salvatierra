import './Item.css'

const Item = ({producto}) => {
  return (
    <li className="productos-li">
    <h1>{producto.title}</h1>
    <img alt={producto.title} src={producto.image}/>
    <h4>{producto.category}</h4>
    <h4>{producto.description}</h4>
    </li>   
  )
}

export default Item