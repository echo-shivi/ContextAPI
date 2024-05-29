import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    const [pswd, setPswd] = React.useState(null)
    return(
        //ou typically wrap your component tree with a Provider component that supplies the context value
        <UserContext.Provider value={{user, setUser,pswd, setPswd}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;