import styles from "./UseCallbackHook.module.scss"; 
import { UseCallbackHookProps } from "./UseCallbackHook.types.ts" 
 import { useState,useCallback,useEffect } from "react";
 import Child from "./Child.tsx";
const UseCallbackHook = ({}: UseCallbackHookProps) => { 
    const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("subsscribe");

  const returnComment = useCallback(
    (name:any) => {
      return data + name;
    },[data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}>
        {" "}
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
} 
 
export default UseCallbackHook 
