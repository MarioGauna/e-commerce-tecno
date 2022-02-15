let is_ok =true;

export const customFetch=(products, timeout)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(is_ok){
                resolve(products)
            }else{
                reject("ERROR")
            }
        },timeout); 
    })
}