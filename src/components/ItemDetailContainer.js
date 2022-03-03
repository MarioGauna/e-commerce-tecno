import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { firestoreFetchDeta } from '../utilidades/firestoreFetch';

const ItemDetailContainer = () =>{

    const [dato,setDato] = useState({});
    const {iditem}= useParams();

    useEffect(()=>{   
        firestoreFetchDeta(iditem)
            .then(result=>setDato(result))
            .catch(error => console.log(error)) 
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