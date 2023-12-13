// // LoginForm.js
// import React, { useState } from 'react';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import auth from './firebase';
// // import GoogleSignInButton from './GoogleSignInButton';
// import loginImage from '../food1.jpeg'; // Replace with the path to your image

// const LoginForm = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin({ email, password });
//   };

//   return (
//     <form className="login-form">
//       <div className="left-section">
//         <img src={loginImage} alt="Login" />
//       </div>

//       <div className="right-section">
//         <label>Email</label>
//         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="button" onClick=''>
//           Sign In
//         </button>
//         <br></br>
//       <button type="button" >
//       Continue with Google
//     </button>
//       <p>Don't have an account <a href="">Signup</a></p>

//         {/* <GoogleSignInButton onSignIn={onLogin} /> */}
//       </div>
//     </form>
//   );
// };

// export default LoginForm;

// LoginForm.js
import React, { useState } from 'react';
import loginImage from '../food1.jpeg'

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
      <div className="Parent"> 
      <div className="left-section">
        <img src={loginImage} alt="Login" />
      </div>
    <div className="container">
    
      <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <br></br>
      <button type="button" >
      Continue with Google
    </button>
      <p>Don't have an account <a href="">Signup</a></p>
      
    </form>
    </div>
    </div>  
  );
};  

export default LoginForm;
