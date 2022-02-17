import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const{data}=require('../utilidades/data.js');

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
    
    console.log(idcategory);

    useEffect(()=>{
        if(idcategory === undefined){
        customFetch(1000, data)
            .then(dato=>setDato(dato))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.categoryId === parseInt(idcategory)),1000)
                .then(dato=>setDato(dato))
                .catch(error=>console.log(error))
        }
        
    }, [idcategory]);
    
    return(
        console.log(dato),
        <>
            <ItemList 
                    key={dato.id}
                    item={dato}/>
        </>
    );
}

export default ItemListContainer;