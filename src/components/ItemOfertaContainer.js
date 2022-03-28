import { useEffect, useState } from 'react';
import ItemOferta from '../components/ItemOferta';
import{query,where,collection,getDocs} from "firebase/firestore";
import db from "../utilidades/firebaseConfig"

const ItemOfertaContainer = () =>{
    
    const [dato,setDato] = useState([]);
    const ofertaId= 1;

    const firestoreFetch= async(ofertaId)=>{
        let q;
        if (ofertaId){
            q=query(collection(db,"products"), where('ofertaId', '==' , 1));
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore=querySnapshot.docs.map(document=>({
            id:document.id,
            ...document.data()
        }));
        return dataFromFirestore;
    }

    useEffect(()=>{
        
        firestoreFetch(ofertaId)
            .then(result=>setDato(result))
            .catch(error => console.log(error)) 
    }, [ofertaId]);

    return(
        <ItemOferta item={dato}/>
    );
}

export default ItemOfertaContainer;