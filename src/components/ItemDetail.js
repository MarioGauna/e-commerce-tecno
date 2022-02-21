import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";
import Checkout from './Checkout'
import {useEffect, useState} from 'react';

function ItemDetail({item}){

  const [check,setCheck]=useState(false);

  console.log(check);

  useEffect(()=>{
    console.log("funciona");
    return(
      <div>
        <ItemCount/>
      </div>
      
    )
  },[check])
  
  return(
    <div className="container">
      <h1 className="my-4">{item.name}</h1>
      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid deta" src={item.image} alt=""></img>
        </div>
        <div className="col-md-4">
        <h3 className="my-3">Detalle</h3>
          <p>{item.description}</p>
            <ul className="detalle2">
              <li>Stock: {item.stock}</li>
              <li>Precio: $ {item.price}</li>
            </ul>
            {check === false && <ItemCount envio={check} send={setCheck}/>}
            {check === true && <Checkout/>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;