import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpswd, setConfrmpswd]=useState('');

    const {setUser} = useContext(UserContext)
    const {setPswd} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})// line calls the setUser function, passing it an object containing the username and password state variables.
        setPswd(confirmpswd)//setUser function (assumed to be defined in the UserContext provider) updates the context's state with this new user object.
        //Essentially, it sets the user information in the global state managed by the context, making it accessible throughout your application wherever the context is used.
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        {" "}
        <input type='text'
        value={confirmpswd}
        onChange={(e) => setConfrmpswd(e.target.value)}
        placeholder='confirm password'/>
        {" "}
        <button style={{backgroundColor:"skyblue"}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login