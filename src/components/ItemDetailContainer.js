import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import Loading from '../utilidades/Loading'
import{getDoc,doc} from "firebase/firestore";
import db from "../utilidades/firebaseConfig"

const ItemDetailContainer = () =>{

    const [dato,setDato] = useState([]);
    const {iditem}= useParams();

    const firestoreFetchDeta=async(iditem)=>{
        const docRef=doc(db,"products",iditem);
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
            <Loading/>
        }
        </>
    );
}

export default ItemDetailContainer;