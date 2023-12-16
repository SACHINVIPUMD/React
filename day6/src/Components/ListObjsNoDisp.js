import React from 'react'

export default function ListObjsNoDisp() {
    const college=[
     {id:201, name:'md',age:19},
     {id:202, name:'sandu',age:19}
 ]
 const Display=college.map((col,index)=><li key={index}>{index+1} {col.id} {col.name} {col.age}</li>)
  return (
    <div style={{backgroundColor:"blue"}}>
        <h1>List of Students</h1>
        {Display}
        <br></br>
    </div>
  )
}
