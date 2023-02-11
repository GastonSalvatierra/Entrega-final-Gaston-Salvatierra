import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const{id}= useParams();


    const getProducts = () => {
      const db = getFirestore();
      const querySnapshot= doc(db,"products",id )
      
      getDoc(querySnapshot).then((response)=>{
        setSingleProduct({id: response.id, ...response.data()})
        
      })
      .catch(error => console.log(error))
    }


      useEffect(() =>{
    getProducts();
  
  })


  return (
    <div>
      <ItemDetail productos= {singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer