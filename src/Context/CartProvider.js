import { CartContext } from "./CartContext";
import React, { useState } from 'react'




const CartProvider= ({children}) => {
const [cart,setCart] = useState([]);

const addItem= (item, quantity) =>{
    let newCart;
    let product = cart.find((producto)=> producto.id === item.id );

    if(product){
        if(product.quantity == item.stock){
            alert('no hay mas stock');
            return;
        }
        product.quantity += quantity;
        newCart = [...cart];
    }else{
            product = {
            id: item.id,
            name: item.titulo,
            price: item.precio,
            imagen: item.img,
            descripcion: item.descripcion,
            quantity: quantity,
            category: item.categoria, 
            stock: item.stock,
        };
        newCart= [...cart, product];
    }
    setCart(newCart);
    alert('producto agregado al carrito')

};

    const removeItem= (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }

       const clear = () => {
        setCart ([]);
    }

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clear}}> 
            {children} 
        </CartContext.Provider>
      );

}


export default CartProvider;