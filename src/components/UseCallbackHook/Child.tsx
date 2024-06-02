import { useEffect } from "react";

function Child({returnComment}:any) {
    
  useEffect(() => {
    console.log("func called");
  },[returnComment]);

  return( 
  <div>{returnComment("Pedro")}</div>
 ) 
}

export default Child;