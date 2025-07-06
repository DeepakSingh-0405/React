import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
        <div style={{display : "flex" , flexDirection: "row", gap:10}}>

            <input type="text"
            placeholder="Username"
            onChange={(e)=> setUsername(e.target.value)}
            value={username} 
            style={{padding:10 , backgroundColor: "black", color: "white"}}
            />

            <input type="password"
            placeholder="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password} 
            style={{padding:10 , backgroundColor: "black", color: "white"}}
            />

            <button 
            onClick={handleSubmit}
            style={{padding:10 ,border:"none", borderRadius:10, backgroundColor: "black", color: "white"}}
            >Submit</button>
        </div>
        </>
    )
}