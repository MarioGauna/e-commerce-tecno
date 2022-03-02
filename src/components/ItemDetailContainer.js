import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getDoc, doc } from "firebase/firestore";
import db from '../utilidades/firebaseConfig'

const ItemDetailContainer = () =>{

    const [dato,setDato] = useState([]);
    const {iditem}= useParams();

    useEffect(()=>{
        
        const firestoreFetchDeta=async(iditem)=>{
            const docRef=doc(db,"productos",iditem);
            const docSnap=await getDoc(docRef);
            if(docSnap.exists()){
                return{
                    id:iditem,
                    ...docSnap.data()
                }
            }else{
                console.log("Documento Vacío");
            }
        }
        firestoreFetchDeta()
            .then(result=>setDato(result))
            .catch(error => console.log(error));  
    }, [iditem]);
    
    /* useEffect(()=>{
        
        if(iditem === undefined){
        customFetch(data, 1000)
            .then(res=>setDato(res))
            .catch(error=>console.log(error))
        }else{
            customFetch(data.filter(item => item.id === parseInt(iditem)), 1000)
                .then(res=>setDato(res[0]))
                .catch(error=>console.log(error))
        }
        
    }, [iditem]); */

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