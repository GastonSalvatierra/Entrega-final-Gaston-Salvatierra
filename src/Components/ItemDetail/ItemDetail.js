
const ItemDetail = ({productos}) => {
  return (
    <div>
        <li>
            <img alt={productos.title} src={productos.image} width='300px' />
            <h2>{productos.title}</h2>
            <h3>{productos.category}</h3>
            <h3>{productos.description}</h3>
        </li>
    </div>
  )
}

export default ItemDetail