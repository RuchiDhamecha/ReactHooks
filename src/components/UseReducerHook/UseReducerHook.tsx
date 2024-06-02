import { useReducer } from "react";
import styles from "./UseReducerHook.module.scss"; 
import { UseReducerHookProps } from "./UseReducerHook.types.ts" 
 const reducer=(state:any,action:any)=>{
    switch(action.type){
        case "INCREAMENT" :
            return {count :state.count + 1, showText: state.showText}
        case "toggleShowText" :
            return {count :state.count, showText: !state.showText}
        default:
            return state;
    }
 }
const UseReducerHook = ({}: UseReducerHookProps) => { 
    const [state,dispach] = useReducer(reducer,{count:0,showText:true})
    return(
        <div>
            <h1>{state.count}</h1>
            <button 
            onClick={()=>{
                dispach({type:"INCREAMENT"});
                dispach({type:"toggleShowText"});
            }}>
                click here
            </button>

            {state.showText && <p>This is text</p>}
        </div>
    )
} 
 
export default UseReducerHook 
