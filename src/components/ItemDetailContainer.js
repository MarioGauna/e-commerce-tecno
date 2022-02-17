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
        customFetch(data,500)
            .then(dato=>setDato(dato))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.id === parseInt(iditem)),1000)
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