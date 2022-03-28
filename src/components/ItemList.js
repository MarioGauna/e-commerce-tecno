import React from "react";
import Item from '../components/Item.js';
import Loading from '../utilidades/Loading'

const ItemList = ({item})=> {

    return (
        <div className="container lista">
            {
                item
                ?
                item.map(elem => <Item key={elem.id} item={elem}/>)
                :
                <Loading/>
            }
        </div>
        )
}

export default ItemList;