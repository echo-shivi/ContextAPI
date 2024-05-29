import React from 'react'

const UserContext = React.createContext()

export default UserContext;
//ontext is a way to manage state globally. It can be used to share values between components without having to explicitly pass props through every level of the tree. Context is primarily used when some data needs to be accessible by many components at different nesting levels.