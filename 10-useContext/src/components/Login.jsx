import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


function Login() {
const [username,setUsername] = useState('');
const [password, setPassword] = useState('');

const {setUser} =useContext(UserContext)

const handleSubmit = (e)=>{
  e.preventDefault(); // this line says that when ever we click on submit button, it will not refresh the page
  setUser({username,password})
};



  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // this line says that when ever we change the value of password,
        //  it will change the value of password
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login