import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { customFetch } from '../utilidades/customFetch';
import data from '../utilidades/data'

const ItemDetailContainer = () =>{

    const [dato,setDato] = useState([]);
    const {iditem}= useParams();

    useEffect(()=>{
        
        if(iditem === undefined){
        customFetch(data, 1000)
            .then(res=>setDato(res))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.id === parseInt(iditem)), 1000)
                .then(res=>setDato(res[0]))
                .catch(error=>console.log(error))
        }
        
    }, [iditem]);

    return (
        <>
        {
            setDato
            ?
            <ItemDetail item={dato} />
            :
            <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetailContainer;