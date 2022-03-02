import{query,orderBy,where,collection,getDocs} from "@firebase/firestore";
import db from "./firebaseConfig"

const firestoreFetch= async(idcategory)=>{
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

export default firestoreFetch;