import { useContext } from "react";
import { AppContext } from "./UseContextHook";
const User =()=>{
const {username} = useContext(AppContext)
return(
    <div>
        <p>Username: {username}</p>
    </div>
)
}
export default User