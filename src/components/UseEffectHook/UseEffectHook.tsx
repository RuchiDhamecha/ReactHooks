import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.scss"; 
import { UseEffectHookProps } from "./UseEffectHook.types.ts" 
import Axios  from "axios";
 
const UseEffectHook = ({}: UseEffectHookProps) => { 
    const [data,setData] = useState("");
    const [count,setCount]=useState(0);
    useEffect(()=>{
        Axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response:any)=>{
            setData(response.data[0].email);
            console.log("api called")
        })
    },[])
    return(
        <div>
        <h1>hello</h1>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
        onClick={()=>{
            setCount(count+1);
        }}>
            click
        </button>
        </div>

    )
} 
 
export default UseEffectHook 
