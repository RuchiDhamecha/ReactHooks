import { useRef } from "react";
import styles from "./UseRefHook.module.scss"; 
import { UseRefHookProps } from "./UseRefHook.types.ts" 
 
const UseRefHook = ({}: UseRefHookProps) => { 
    const inputRef = useRef(null);

    const onClick =()=>{
        inputRef.current.focus();
        inputRef.current.value="";
    }
    return(
        <div>
            <h1>hi</h1>
            <input type="text " placeholder="ex.." ref={inputRef}/>
            <button onClick={onClick }>change name</button>
        </div>
    )
} 
 
export default UseRefHook 
