import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({item}){
    return (
        <div class="card">
            <img class="card-img-top" src={item.img} alt="Card cap"></img>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.stock}</p>
                <p class="card-text">{item.cost}</p>
                <button type="button" class="btn btn-primary">Ver Detalles</button>
            </div>
        </div>
    );
}

export default Item;