import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { customFetch } from '../utilidades/customFetch';

const{data}=require('../utilidades/data.js');

const ItemDetailContainer = () =>{
    const [dato,setDato] = useState({});

    useEffect(()=>{
        customFetch(2000,data[1])
        .then(result=>setDato(result))
        .catch(error=>console.log(error))
    }, []);

    return (
        <div className='contenedor'>
            {dato.map((item)=>{
                return(
                    <ItemDetail key={item.id}
                                img={item.img}
                                name={item.name}
                                stock={item.stock}
                                cost={item.cost}
                                description={item.description}
                    />
                )
            })}
        </div>
        
    );
}


export default ItemDetailContainer;

