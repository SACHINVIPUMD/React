import React from 'react'
const Greeting=()=>{
    const username="John";
    const formattedDate=new Date().toLocaleDateString('en-US',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return(
        <div>
            <h2>Hello, {username}!</h2>
            <p>Welcome to our website. Today is {formattedDate}.</p>
        </div>
    )
}
export default Greeting;