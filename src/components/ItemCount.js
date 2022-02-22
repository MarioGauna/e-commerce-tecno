import { useEffect, useState } from "react";
import Image1 from "../image/minus.png";
import Image2 from "../image/plus.png";

const ItemCount = ({stock=0, initial=1, onAdd}) =>{

    const[valor, setValor]= useState(0);

    useEffect(()=>{
        setValor(initial);
    },[initial]);

    const agregar = () =>{

        if(valor < stock){
            setValor(valor+1);
        }
    }

    const quitar = () =>{

        if(valor > initial+1){
            setValor(valor-1);
        }
    }

    return(
        <main className="central">
            <button onClick={quitar} className="quantity"><img src={Image1} alt="Imagen no encontrada"></img></button>
            <p className="digito">{valor}</p>
            <button onClick={agregar} className="quantity"><img src={Image2} alt="Imagen no encontrada"></img></button>
            <button onClick={()=> onAdd(valor)} type="button" className="btn btn-primary detalle">Agrega al carrito</button>
        </main>
    );
}

export default ItemCount;