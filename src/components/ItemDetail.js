import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";
import Checkout from './Checkout'
import {useState} from 'react';

function ItemDetail({item}){

  const [check,setCheck]=useState(0);

  const onAdd =(cantidad)=>{
    alert("Usted a seleccionado " + cantidad + " items.");
    setCheck(cantidad);
  }

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
            {check === 0 && <ItemCount stock={item.stock} initial={check} onAdd={onAdd}/>}
            {check !== 0 && <Checkout/>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;