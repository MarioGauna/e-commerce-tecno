import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { customFetch } from '../utilidades/customFetch';

const{data}=require('../utilidades/data.js');

const ItemDetailContainer = () =>{
    const [dato,setDato] = useState([]);
    const {iditem}= useParams();
    
    console.log(iditem);

    useEffect(()=>{
        if(iditem === undefined){
        customFetch(1000, data)
            .then(dato=>setDato(dato))
            .catch(error=>console.log(error))
        }else{
            customFetch(1000, data.filter(item => item.id === parseInt(iditem)))
                .then(dato=>setDato(dato))
                .catch(error=>console.log(error))
        }
        
    }, [iditem]);

    return (
        <ItemDetail key={dato.id}
                    item={dato}
                    />
    );
}

export default ItemDetailContainer;