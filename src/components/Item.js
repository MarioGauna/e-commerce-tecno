import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({item}){
    
    return (
        <div className="card">
            <img className="card-img-top itemDeta" src={item.image} alt="Imagen no encontrada"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/item/${item.id}`}><button type="button" className="btn btn-primary detalle lower">Ver Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;