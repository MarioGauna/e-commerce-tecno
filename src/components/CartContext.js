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
            checkCart.cantidad += cantidad;
            setCartList([
                ...cartList
            ]);
        }        
    }

    const removeItem = (id)=>{
        const newList= cartList.filter((item) => item.id !== id);
        setCartList(newList);
    }

    const clearList =()=>{
        setCartList([]);
    }

    const badge =()=>{
        const initialValue = 0;
        let cantSum= cartList.map(item=>item.cantidad);
        let sumWithInitial = cantSum.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
        return sumWithInitial;
    }

    const itemTotal=(id)=>{
        const it= cartList.map(item=>item.id).indexOf(id);
        return cartList[it].price * cartList[it].cantidad;
    }

    const total=()=>{
        const initialValue = 0;
        const subTotal=cartList.map(item=>itemTotal(item.id));
        return subTotal.reduce((previousValue,currentValue)=>previousValue+currentValue,initialValue);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clearList, badge, itemTotal, total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;