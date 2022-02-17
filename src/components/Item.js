import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({item}){
    return (
        <div className="card">
            <img className="card-img-top" src={item.image} alt="imagen no encontrada"></img>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <Link to={`/item/${item.id}`}><button type="button" className="btn btn-primary detalle">Ver Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;