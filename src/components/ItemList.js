import React from "react";
import Item from '../components/Item.js';



const ItemList = ({products}) => {
    return (
        products.map((producto) =>{
            return (
                <Item
                    key={producto.id}
                    name={producto.name}
                    img={producto.img}
                    stock={producto.stock}
                    cost={producto.cost}
                />
            );
        })
    );
};

export default ItemList;