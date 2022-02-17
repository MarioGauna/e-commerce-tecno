import React from "react";
import Item from '../components/Item.js';

const ItemList = ({item})=> {

    return (
        <div className="container lista">
            {
                item
                ?
                item.map(elem => <Item key={elem.id} item={elem}/>)
                :
                <p>Cargando...</p>
            }
        </div>
        )
}

export default ItemList;