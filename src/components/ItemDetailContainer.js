import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { customFetch } from '../utilidades/customFetch';

const{data}=require('../utilidades/data.js');

const ItemDetailContainer = () =>{
    const [dato,setDato] = useState({});

    useEffect(()=>{
        customFetch(data[2],2000)
        .then(dato=>setDato(dato))
        .catch(error=>console.log(error))
    }, []);

    return (
        <ItemDetail key={dato.id}
                    image={dato.image}
                    name={dato.name}
                    stock={dato.stock}
                    cost={dato.cost}
                    description={dato.description}
                    />
    );
}


export default ItemDetailContainer;

