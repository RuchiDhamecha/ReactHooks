import styles from "./UseImperativeHandleHook.module.scss"; 
import { UseImperativeHandleHookProps } from "./UseImperativeHandleHook.types.ts" 
import Button from "./Button.tsx";
import {useRef} from 'react';
 
const UseImperativeHandleHook = ({}: UseImperativeHandleHookProps) => { 
    const buttonRef = useRef(null);
    return (
      <div>
        <button onClick={() => {
            buttonRef.current.alterToggle();
          }}>btn from parent
        </button>

        <Button ref={buttonRef}/>
      </div>
    );
} 
 
export default UseImperativeHandleHook 
