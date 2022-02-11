import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({img,name,stock,cost}){
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="imagen no encontrada"></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{stock}</p>
                <p class="card-text">{cost}</p>
                <button type="button" className="btn btn-primary detalle">Ver Detalles</button>
            </div>
        </div>
    );
}

export default Item;