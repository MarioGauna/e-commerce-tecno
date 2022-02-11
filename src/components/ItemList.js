import React from "react";
import Item from '../components/Item.js';
import imagen1 from '../image/imagen1.jpg';
import imagen2 from '../image/imagen2.jpg';
import imagen3 from '../image/imagen3.jpeg';

let api = true;

const customFetch = (timeout,products) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (api) {
                resolve(products);
            } else {
                reject("ERROR");
            }
        }, timeout);
    })
}

customFetch(2000,products)
    .then((products) => console.log("ANDA", products))
    .catch((error) => console.log("NO ANDA", error)); 


function Prodlist(){
    const products = [
        {
            id: 30,
            img: imagen1,
            name: "Agua Con Gas 1,5 lts",
            stock: 86,
            cost: 45,
        },
        {
            id: 29,
            img: imagen2,
            name: "Agua Sin Gas 1,5 lts",
            stock: 100,
            cost: 140,
        },
        {
            id: 76,
            img: imagen3,
            name: "Alambrado Chardonnay 750 ml",
            stock: 92,
            cost: 575,
        }
    ]

const ItemList = products.map(item => <Item key={item.id}
                                            img={item.img}
                                            name={item.name}
                                            stock={item.stock}
                                            cost={item.cost}
                                            />)
return <div>{ItemList}</div>
}

export default Prodlist;