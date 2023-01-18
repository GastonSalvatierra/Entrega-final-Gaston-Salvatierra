import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const{id}= useParams();

    const getProducts = fetch(`https://fakestoreapi.com/products/${id}`)

      useEffect(() =>{
    getProducts
    .then((response) => response.json())


    .then((response) =>setSingleProduct(response))
  

    .catch((err) => console.log(err))
  })


  return (
    <div>
      <ItemDetail productos= {singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer