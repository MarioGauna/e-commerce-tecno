import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { firestoreFetch } from '../utilidades/firestoreFetch';

const ItemListContainer = () =>{
    
    const [dato,setDato] = useState({});
    const {idcategory}= useParams();

    useEffect(()=>{
        
        firestoreFetch(idcategory)
            .then(result=>setDato(result))
            .catch(error => console.log(error)) 
    }, [idcategory]);

    return(
        <ItemList item={dato}/>
    );
}

export default ItemListContainer;