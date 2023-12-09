import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// var name="sachin"
// const display=<div><h1>Hello {name}</h1><p>Welcome to React</p></div> //JSX javascript and html
// var display=<ol start={3} type='i'>
//   <li>mango</li>
//   <li>jackfruit</li>
//   <li>banana</li>
// </ol>
// const age=2;
// // var eligible=<h1 style={{color:'blue'}}>{age>18?"Eligible":"not Eligible"}</h1>
// if(age>18){
//     var eligible=<h1 style={{color:"green"}}>Eligible</h1>;
// }
//   else{
//     var eligible=<h1 style={{color:"red"}}>Not Eligible</h1>;
    
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
