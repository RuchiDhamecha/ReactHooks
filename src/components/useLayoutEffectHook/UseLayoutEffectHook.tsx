import styles from "./useLayoutEffectHook.module.scss"; 
import { useLayoutEffectHookProps } from "./useLayoutEffectHook.types.ts" 
import { useEffect, useLayoutEffect, useRef } from "react";
// works same as useEffect, but useEffect works after rendring page
 // changes layout for user before page gets rendred
const UseLayoutEffectHook = ({}: useLayoutEffectHookProps) => { 
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[])

    useEffect(()=>{
        inputRef.current.value ="hi"
    })
    return(
        <div>
            <input type="text" value="hi" ref={inputRef} />
        </div>
    )

} 
 
export default UseLayoutEffectHook 
