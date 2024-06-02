import styles from "./UseStateHook.module.scss"; 
import { UseStateHookProps } from "../UseStateHook.types.ts" ;
import { useState } from "react";
 
const UseStateHook = ({}: UseStateHookProps) => { 
    const [counter,setCounter] = useState(0);
    function increament(){
        setCounter(counter + 1);
    }
    return(

        <div>
            <p>{counter}</p>
            <button onClick={()=>increament()}>Increament</button>
        </div>
    )
} 
 
export default UseStateHook 
