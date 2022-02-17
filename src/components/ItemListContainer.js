import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import data from '../utilidades/data'

let api = true;

const customFetch = (data, timeout) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (api) {
                resolve(data);
            } else {
                reject("ERROR");
            }
        }, timeout);
    })
}

const ItemListContainer = () =>{
    
    const [dato,setDato] = useState([]);
    const {idcategory}= useParams();

    useEffect(()=>{
        if(idcategory === undefined){
        customFetch(data, 1000)
            .then(res=>setDato(res))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.categoryId === parseInt(idcategory)),1000)
                .then(res=>setDato(res))
                .catch(error=>console.log(error))
        }
        
    }, [idcategory]);
    
    return(
        <ItemList item={dato}/>
    );
}

export default ItemListContainer;