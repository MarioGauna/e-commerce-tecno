import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=({children}) =>{
    
    const [cartList,setCartList]=useState([]);

    const addItem = (item,cantidad)=>{
        setCartList([
            ...cartList,
            {
            key:item.id,
            id:item.id,
            name:item.name,
            image:item.image,
            price:item.price,
            cantidad:cantidad
        }]);
    }

    return(
        <CartContext.Provider value={{cartList, addItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;