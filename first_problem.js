const describeValue=(value)=>{
    if(typeof value==="string" && value.length >0){
        return ` "string | truthy" `
    }
    else if (typeof value==="string" && value.length <= 0){
         return ` "string | falsy" `
    }
    else if (typeof value==="number" && value != 0){
         return ` "number | truthy" `
    }
     else if (typeof value==="number" && value === 0){
         return ` "number | falsy" `
    }
    else if (typeof value==="true"){
         return `"boolean | truthy"`
    }
    else if ( value=== null){
         return `"object | falsy"`
    }
     else if (typeof value==="undefined"){
         return `"undefined | falsy"`
    }
   
   



}

