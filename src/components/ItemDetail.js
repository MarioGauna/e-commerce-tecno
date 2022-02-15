import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail(img,name,stock,cost,description){
  return(
    <div class="container">
      <h1 class="my-4">{name}</h1>
      <div class="row">
        <div class="col-md-8">
          <img class="img-fluid" src={img} alt=""></img>
        </div>
        <div class="col-md-4">
          <h3 class="my-3">Project Description</h3>
          <p>{description}</p>
          <h3 class="my-3">Project Details</h3>
          <ul>
            <li>{stock}</li>
            <li>{cost}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;