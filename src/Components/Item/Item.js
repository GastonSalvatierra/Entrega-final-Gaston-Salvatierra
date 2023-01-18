
const Item = ({producto}) => {
  return (
    <li key = {producto.id}>{producto.marca}</li>   
  )
}

export default Item