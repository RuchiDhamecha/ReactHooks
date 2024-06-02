import { useContext } from "react"
import { AppContext } from "./UseContextHook"

const Login=()=>{
const {setUsername} = useContext(AppContext);
return(
    <div>
        <input type="text" onChange={(e)=>{
            setUsername(event?.target.value)
        }} />
    </div>
)
}
export default Login