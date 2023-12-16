import React from 'react'
function Display(props){
    return(
        <div>
        <h1>id: {props.list.id}</h1>
        <h1>name: {props.list.name}</h1>
        <h1>age: {props.list.age}</h1>
        </div>
    )
}
export default function ListObjs() {
    const college=[
        {id:201, name:'md',age:19},
        {id:202, name:'sandu',age:19}
    ]
    const stcoll = college.map((list)=><Display list ={list} />)
  return (
    <div>
      {stcoll}
    </div>
  )
}
