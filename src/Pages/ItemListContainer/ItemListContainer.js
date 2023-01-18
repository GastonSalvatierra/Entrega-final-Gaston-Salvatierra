import Counter from '../../Components/Counter/Counter'; 
import { useEffect, useState} from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


/* const arreglo= [
  {marca:'ASUS', precio: 5000, id:12},
  {marca:'LENOVO', precio: 2000, id:13},
  {marca:'VICTUS', precio: 6000, id:14},
  {marca:'MSI', precio: 7000, id:15}
]; */
 const ItemListContainer = ({greeting}) => {
  const [productos, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {category} = useParams();

/*   const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(arreglo);
    }, 2000);
  });  */

  const getProducts = fetch('https://fakestoreapi.com/products')

 useEffect(() =>{
  getProducts
  .then((response) => response.json())


  .then((response) =>setProducts(response))
 

  .catch((err) => console.log(err))
})

useEffect(() => {
  const filterProducts= productos.filter((item)=> item.category === category)
  setFilteredProducts(filterProducts);
}
,[category] )
  

  return (
    <div>
      <h1>{greeting}</h1>
      <Counter/>
      <ItemList productos= {category ? filteredProducts : productos}/>
    </div>
  )
}



export default ItemListContainer;