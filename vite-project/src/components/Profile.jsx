import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    const {pswd}=useContext(UserContext)
    // consume this context in any component within the UserProvider tree using the useContext hook
    
    if (!user)  return <div>please login</div>

    return <div>Welcome {user.username}
    <br/>
    Do you want to confirm this password?
    {" "}
    {pswd}
    </div>
}

export default Profile