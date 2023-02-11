import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import {getFirestore, collection, addDoc, doc, updateDoc} from 'firebase/firestore';
import './Cart.css'

const Cart = () => {
  const {cart, removeItem, clear} = useContext(CartContext);
  const [order, setOrder]= useState({});
  const db= getFirestore();



  useEffect (() => {
    setOrder({
      buyer: {
        name: 'julio perez',
        phone: '1155656585',
        email: 'blabla@test.com'
      },
      item: cart, 
      total: cart.reduce((acc,curr ) => acc + curr.price * curr.quantity,0)
    })
  },[cart]);

  if (cart.length == 0){
    return(<h1 className="vacio">Tu carrito esta vacío . . .</h1>)
  }

  const createOrder = () => {
    const querySnapshot = collection (db, 'orders');
    addDoc(querySnapshot, order)
    
    .then((response)=> {
      console.log(response.id);
      updateStockProducts();
      alert('creado con exito'+ response.id);
    })
    .catch(error => console.log(error));
  };

  const updateStockProducts = () =>{
    cart.forEach((producto) =>{
      const querySnapshot = doc(db, 'products', producto.id);

      updateDoc(querySnapshot, {
        stock: producto.stock - producto.quantity,
      })
      .then(() => {
        console.log('stock actualizado')
      })
      .catch(error => console.log(error))
    } )
   };

    return (
      <div>

        <ul>
          {cart.map((producto) => (
            <li className='listado' key={producto.id}>
            
                <img alt={producto.name} src={producto.imagen} width='300px' />
                <h2>{producto.name}</h2>
                <h3>{" $ "+producto.price}</h3>
                <h3>{"cantidad de productos: "+ producto.quantity}</h3>
                
                <button onClick={() => removeItem(producto.id)}>eliminar producto</button>              
            
            </li>
          ))}
        </ul>

        <button onClick={() => clear()}>eliminar todos los productos</button>
        <button onClick={() => createOrder()}>crear orden</button>

      </div>
    )
  }


export default Cart;