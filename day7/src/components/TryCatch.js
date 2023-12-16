import React from "react";
export default function TryCatch({fruit}){
    let value = fruit;
    try{
        if(fruit==='Onion'){
            throw new Error("Not a fruit")
        }
    }
    catch(error){
        console.log("not a fruit");
        value=" Error: Not a fruit"
    }
    finally{
       value += 'Finally'
    }
    return(
        <div>
            {value}
        </div>
    )
}
