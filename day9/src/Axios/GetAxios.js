import React,{useEffect, useState} from "react";
import axios from "axios";
export default function GetAxios(){
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/user').then((res)=>{
            const store=res.data;
            setName(store)
        })
    },[])

    return(
        <div>
            <h1>Axios get</h1>
            {name.map((costs)=><li key={costs.id}>{costs.id} : {costs.name}</li>)}
        </div>
    )
}



