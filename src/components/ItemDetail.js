import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";

function ItemDetail(dato){
  return(
    <div class="container">
      <h1 class="my-4">{dato.name}</h1>
      <div class="row">
        <div class="col-md-8">
          <img class="img-fluid" src={dato.image} alt=""></img>
        </div>
        <div class="col-md-4">
          <p>{dato.description}</p>
          <h3 class="my-3">Detalle</h3>
          <ul className="detalle2">
            <li>Stock: {dato.stock}</li>
            <li>Precio: {dato.price}</li>
          </ul>
          <ItemCount/>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;