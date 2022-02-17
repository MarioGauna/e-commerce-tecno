import { useState } from "react";
import Image1 from "../image/minus.png";
import Image2 from "../image/plus.png";

const ItemCount = () =>{

    const[valor, setValor]= useState(1);

    const agregar = () =>{

        if(valor <5){
            setValor(valor+1);
        }
    }

    const quitar = () =>{

        if(valor >1){
            setValor(valor-1);
        }
    }

    const mostrar = () =>{

        alert("Usted a seleccionado " + valor + " items");
    }

    return(
        <main className="central">
            <button onClick={quitar} className="quantity"><img src={Image1} alt="Imagen no encontrada"></img></button>
            <p className="digito">{valor}</p>
            <button onClick={agregar} className="quantity"><img src={Image2} alt="Imagen no encontrada"></img></button>
            <button onClick={mostrar} type="button" className="btn btn-primary detalle">Agrega al carrito</button>
        </main>
    );
}

export default ItemCount;