import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item.js';

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

const ItemList =()=> {
    
    const [dato,setDato] = useState([]);
    const {idcategory}= useParams();
    
    console.log(idcategory);

    useEffect(()=>{
        if(idcategory === undefined){
        customFetch(1000, data)
            .then(dato=>setDato(dato))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.id === parseInt(idcategory)),1000)
                .then(dato=>setDato(dato))
                .catch(error=>console.log(error))
        }
        
    }, [idcategory]);

    return <div className="container lista">{data.map(dato => <Item
                                            key={dato.id} 
                                            item={dato}
                                            />
    )}</div>
}

export default ItemList


/* customFetch(2000,data.filter(item => item.categoryId === parseInt(idcategory)))
        .then((data) => console.log("ANDA", typeof data))
        .catch((error) => console.log("NO ANDA", error)); 
*/