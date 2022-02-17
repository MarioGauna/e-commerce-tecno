import React from "react";
import Item from '../components/Item.js';

const ItemList =(dato)=> {
    
    console.log(dato);
    return (<div className="container lista">{dato.map(item => <Item
                                            key={item.id} 
                                            item={item}
                                            />
    )}
    </div>)
}

export default ItemList