import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './products.js'

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
    .then((products) => console.log("Anda", products))
    .catch((error) => console.log("NO ANDA", error));


const Item = (props) =>{
    return (
        <div class="card">
            <img class="card-img-top" src={props.img} alt="Card cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.stock}</p>
                <p class="card-text">{props.cost}</p>
                <button type="button" class="btn btn-primary">Ver Detalles</button>
            </div>
        </div>
    );
}

export default Item;