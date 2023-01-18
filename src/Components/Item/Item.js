
const Item = ({producto}) => {
  return (
    <li width = '200px' className="productos">
    <img alt={producto.title} src={producto.image} height= '300px' width= '300px'/>
    <h1>{producto.title}</h1>
    <h4>{producto.category}</h4>
    <h4>{producto.description}</h4>
    </li>   
  )
}

export default Item