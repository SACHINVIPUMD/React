import React from "react";
import img from '../assets/login.jpg';
class ClassComponent extends React.Component
{
    render(){
        return(
            <div>
                <h1> Hello class Component</h1>
                <img src={img}></img>
            </div>
        );
    }
}
export default ClassComponent
