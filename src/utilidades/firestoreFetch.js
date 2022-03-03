import{query,orderBy,where,collection,getDocs,getDoc,doc} from "firebase/firestore";
import db from "./firebaseConfig"

export const firestoreFetch= async(idcategory)=>{
    let q;
    if (idcategory){
        q=query(collection(db,"productos"), where("categoryId", "==", idcategory));
    }else{
        q=query(collection(db,"productos"), orderBy("categoryId"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore=querySnapshot.docs.map(document=>({
        id:document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchDeta=async(iditem)=>{
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