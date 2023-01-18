import Counter from '../Components/Counter/Counter'; 
import { useEffect, useState} from 'react';
import ItemList from '../Components/ItemList/ItemList';


const arreglo= [
  {marca:'ASUS', precio: 5000, id:12},
  {marca:'LENOVO', precio: 2000, id:13},
  {marca:'VICTUS', precio: 6000, id:14},
  {marca:'MSI', precio: 7000, id:15}
];

const ItemListContainer = ({greeting}) => {
  const [productos, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(arreglo);
    }, 2000);
  }); 

 useEffect(() =>{
  getProducts
  .then((response) => {
    console.log(response);
    setProducts(response);
})
  .catch((err) => console.log(err));
 },[])

  return (
    <div>
      <h1>{greeting}</h1>
      <Counter/>
      <ItemList productos= {productos}/>
    </div>
  )
}


export default ItemListContainer;