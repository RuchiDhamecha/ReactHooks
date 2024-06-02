import styles from "./UseMemoHooko.module.scss"; 
import { UseMemoHookoProps } from "./UseMemoHooko.types.ts" 
import axios from "axios"
import { useMemo,useState,useEffect } from "react";
const UseMemoHook = ({}: UseMemoHookoProps) => { 

    const [data,setData] = useState(null);
    const [toggle,setToggle] =useState(false);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data);
        });
    }, []);
  
    const findLongestName =(comments:any)=>{
      if (!comments) 
        return null;
      let longestName = "";
      for (let i=0; i<comments.length; i++) {
        let currentName =comments[i].name;
        if (currentName.length > longestName.length) {
          longestName = currentName;
        }
      }
  
      console.log('computed');
      return longestName;
    };
    const getLongestName = useMemo(() => findLongestName(data), [toggle]);
  
    return (
      <div>
        <div>{getLongestName}</div>
  
        <button onClick={() => {
            setToggle(!toggle);
          }}
        >
          {" "}
          Toggle
        </button>
        {toggle && <h1>toggle</h1>}
      </div>
    )
} 
 
export default UseMemoHook
