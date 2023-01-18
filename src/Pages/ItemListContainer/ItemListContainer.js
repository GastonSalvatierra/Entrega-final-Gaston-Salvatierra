import Counter from '../../Components/Counter/Counter'; 
import { useEffect, useState} from 'react';
import ItemList from '../../Components/ItemList/ItemList';


/* const arreglo= [
  {marca:'ASUS', precio: 5000, id:12},
  {marca:'LENOVO', precio: 2000, id:13},
  {marca:'VICTUS', precio: 6000, id:14},
  {marca:'MSI', precio: 7000, id:15}
]; */
const idProduct = '2';
const ItemListContainer = ({greeting}) => {
/*   const [productos, setProducts] = useState([]);
 */  const [singleProduct, setSingleProduct] = useState([])

/*   const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(arreglo);
    }, 2000);
  });  */

/*   const getProducts = fetch('https://fakestoreapi.com/products')
 */  const getProducts = fetch(`https://fakestoreapi.com/products/${idProduct}`)

/*  useEffect(() =>{
  getProducts
  .then((response) => response.json())


  .then((response) =>setProducts(response))
 

  .catch((err) => console.log(err))
}) */
  
useEffect(() =>{
  getProducts
  .then((response) => response.json())


  .then((response) =>setSingleProduct(response))
 

  .catch((err) => console.log(err))
})




  return (
    <div>
      <h1>{greeting}</h1>
      <Counter/>
      <ItemList productos= {singleProduct}/>
    </div>
  )
}



export default ItemListContainer;