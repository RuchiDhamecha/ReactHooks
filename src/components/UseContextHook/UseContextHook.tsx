import styles from "./UseContextHook.module.scss"; 
import { UseContextHookProps } from "./UseContextHook.types.ts" 
import Login from './Login.tsx'
import User from './User.tsx'
import { useState,createContext } from "react";
 

export const AppContext = createContext(null);
const UseContextHook = ({}: UseContextHookProps) => { 
    const [username ,setUsername] = useState(null);
    return(
        <AppContext.Provider value={{username,setUsername}}>
            <Login/>
            <User/>
        </AppContext.Provider>
    )
} 
 
export default UseContextHook 
