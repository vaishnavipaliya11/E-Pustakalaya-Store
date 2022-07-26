import { createContext , useContext} from "react";
import { useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState(localStorage.getItem("token") ? true:false)
    const [authUser, setAuthUser] = useState({email:"",firstName:"",lastName:""})
    return(
        <AuthContext.Provider value={{auth,setAuth,authUser, setAuthUser}}>
        {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext (AuthContext)


export {useAuth, AuthProvider}