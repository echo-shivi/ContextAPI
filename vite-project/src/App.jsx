
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div>
        
      <h1 style={{color:"greenyellow"}}>Understanding the boiler plate of Context API</h1>
      <p><h2>All components are aware of the global state store</h2> <br/>
        <h2 style={{backgroundColor:"yellow", color:"grey"}}>No extra library is needed</h2><br/>
        <h3 style={{color:"red"}}>Start-> create a react app -> create a context -> Provide the context ->consume the context in the child Component->End
        </h3></p>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App