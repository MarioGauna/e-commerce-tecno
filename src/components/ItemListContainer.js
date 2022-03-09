import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import{query,where,collection,getDocs} from "firebase/firestore";
import db from "../utilidades/firebaseConfig"

const ItemListContainer = () =>{
    
    const [dato,setDato] = useState([]);
    const {idcategory}= useParams();

    const firestoreFetch= async(idcategory)=>{
        let q;
        if (idcategory){
            q=query(collection(db,"products"), where('categoryId', '==' ,idcategory));
        }else{
            q=query(collection(db,"products"));
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore=querySnapshot.docs.map(document=>({
            id:document.id,
            ...document.data()
        }));
        return dataFromFirestore;
    }

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