import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=({children}) =>{
    
    const [cartList,setCartList]=useState([]);

    console.log(cartList);

    const addItem = (item,cantidad,isInCart)=>{
            setCartList([
                ...cartList,
                {
                key:item.id,
                id:item.id,
                name:item.name,
                image:item.image,
                price:item.price,
                cantidad:cantidad,
                isInCart:true,
            }]);
    }
    
// if(cartList.isInCart === false){
// setCartList(cantidad: cantidad ++)

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