import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=({children}) =>{
    
    const [cartList,setCartList]=useState([]);

    const addItem = (item,cantidad)=>{
        const checkCart = cartList.find(elem => elem.id === item.id)
        if(checkCart === undefined){
        setCartList([
            ...cartList,
            {
            key:item.id,
            id:item.id,
            name:item.name,
            image:item.image,
            price:item.price,
            cantidad: cantidad,
            isInCart:true,
        }])}else{
            checkCart.cantidad += cantidad
        }        
    }


    const removeItem = (id)=>{
        const newList= cartList.filter((item) => item.id !== id);
        setCartList(newList);
    }

    const clearList =()=>{
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clearList}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;