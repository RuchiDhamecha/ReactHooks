import { useState } from "react";
import styles from "./Input.module.scss"; 
import { InputProps } from "./Input.types.ts" 
 
const Input = ({}: InputProps) => { 
    const [inputVal, setInputVal] = useState("Ruchi");
    let onChange=(event:any)=>{
        const newval = event.target.value;
        setInputVal(newval)
    }
    return(
        <div>
            <input type="text" placeholder="name" onChange={onChange} />
            {inputVal}
        </div>
    )
} 
 
export default Input 
