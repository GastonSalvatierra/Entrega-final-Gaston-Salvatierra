import { useEffect, useState} from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection ,query, where} from "firebase/firestore";


 const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const {category} = useParams();

    const getProducts = () => {
      const db =  getFirestore();
      const querySnapshot = collection(db, "products");



    if (category) {
      const newConfiguration = query(querySnapshot,where ("categoria", "==", category ))

      getDocs(newConfiguration).then((response)=> {
        const data = response.docs.map((doc)=>{
          return{id: doc.id, ...doc.data()};
        });
        console.log(data);
        setProducts(data)
      })
      .catch(error => console.log(error));
    } else {
      getDocs(querySnapshot).then((response)=> {
        const data = response.docs.map((doc)=>{
          return{id: doc.id, ...doc.data()};
        });
        console.log(data);
        setProducts(data)
      })
      .catch(error => console.log(error));
    }
  
};


 useEffect(() =>{
  getProducts();

},[category])

  

  return (
    <div>
      <ItemList productos= {productos}/>
    </div>
  )
}



export default ItemListContainer;